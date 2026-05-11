import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import Chatbot from "./Chatbot";

const VEHICLES = {
  Toyota: ["Camry", "Corolla", "RAV4", "Tacoma", "Highlander", "4Runner"],
  Honda: ["Civic", "Accord", "CR-V", "Pilot", "Odyssey"],
  Ford: ["F-150", "Mustang", "Explorer", "Escape", "Focus"],
  Chevrolet: ["Silverado", "Malibu", "Equinox", "Camaro", "Traverse"],
  Subaru: ["Outback", "Forester", "Impreza", "WRX", "Crosstrek"],
  Nissan: ["Altima", "Rogue", "Sentra", "Frontier", "Pathfinder"],
  BMW: ["3 Series", "5 Series", "X3", "X5", "M3"],
};

const TRIMS = {
  Toyota: {
    Camry: [
      { from: 1990, to: 1991, trims: ["DLX", "LE", "XLE"] },
      { from: 1992, to: 1996, trims: ["DX", "LE", "SE", "XLE"] },
      { from: 1997, to: 2001, trims: ["CE", "LE", "SE", "XLE"] },
      { from: 2002, to: 2006, trims: ["LE", "SE", "XLE"] },
      { from: 2007, to: 2011, trims: ["CE", "LE", "SE", "XLE", "Hybrid"] },
      { from: 2012, to: 2017, trims: ["L", "LE", "SE", "XLE", "XSE", "Hybrid LE", "Hybrid XLE"] },
      { from: 2018, to: 2024, trims: ["L", "LE", "SE", "XSE", "XLE", "TRD", "Hybrid LE", "Hybrid SE", "Hybrid XLE", "Hybrid XSE"] },
    ],
    Corolla: [
      { from: 1990, to: 1997, trims: ["DX", "LE", "SR5"] },
      { from: 1998, to: 2002, trims: ["CE", "LE", "VE", "S"] },
      { from: 2003, to: 2008, trims: ["CE", "LE", "S", "XRS"] },
      { from: 2009, to: 2013, trims: ["Base", "LE", "S", "XRS"] },
      { from: 2014, to: 2019, trims: ["L", "LE", "LE Eco", "S", "SE", "XSE", "XLE"] },
      { from: 2020, to: 2024, trims: ["L", "LE", "SE", "XSE", "XLE", "Hybrid LE", "Hybrid SE"] },
    ],
    RAV4: [
      { from: 1996, to: 2000, trims: ["Base"] },
      { from: 2001, to: 2005, trims: ["Base", "L", "Edge"] },
      { from: 2006, to: 2012, trims: ["Base", "Sport", "Limited"] },
      { from: 2013, to: 2018, trims: ["LE", "XLE", "Limited", "SE", "Platinum"] },
      { from: 2019, to: 2024, trims: ["LE", "XLE", "XLE Premium", "TRD Off-Road", "Adventure", "Limited", "Hybrid LE", "Hybrid XLE", "Hybrid XSE", "Hybrid Limited", "Prime SE", "Prime XSE"] },
    ],
    Tacoma: [
      { from: 1995, to: 2004, trims: ["Base", "SR5", "PreRunner", "X-Runner"] },
      { from: 2005, to: 2015, trims: ["Base", "SR5", "PreRunner", "X-Runner", "TRD Sport", "TRD Off-Road", "Limited"] },
      { from: 2016, to: 2023, trims: ["SR", "SR5", "TRD Sport", "TRD Off-Road", "TRD Pro", "Limited", "Trail"] },
      { from: 2024, to: 2024, trims: ["SR", "SR5", "TRD Sport", "TRD Off-Road", "TRD Pro", "Limited", "Trail", "Trailhunter"] },
    ],
    Highlander: [
      { from: 2001, to: 2007, trims: ["Base", "Sport", "Limited"] },
      { from: 2008, to: 2013, trims: ["Base", "SE", "Limited", "Hybrid Base", "Hybrid Limited"] },
      { from: 2014, to: 2019, trims: ["LE", "LE Plus", "XLE", "SE", "Limited", "Limited Platinum", "Hybrid LE", "Hybrid XLE", "Hybrid Limited", "Hybrid Platinum"] },
      { from: 2020, to: 2024, trims: ["L", "LE", "XLE", "Limited", "Platinum", "Hybrid LE", "Hybrid XLE", "Hybrid Limited", "Hybrid Platinum"] },
    ],
    "4Runner": [
      { from: 1990, to: 1995, trims: ["Base", "SR5"] },
      { from: 1996, to: 2002, trims: ["SR5", "SR5 Sport", "Limited"] },
      { from: 2003, to: 2009, trims: ["SR5", "Sport", "Trail", "SR5 4WD", "Sport 4WD", "Limited"] },
      { from: 2010, to: 2024, trims: ["SR5", "SR5 Premium", "TRD Sport", "TRD Off-Road", "TRD Off-Road Premium", "TRD Pro", "Venture", "Limited"] },
    ],
  },
  Honda: {
    Civic: [
      { from: 1990, to: 1995, trims: ["DX", "CX", "LX", "EX", "Si", "VX"] },
      { from: 1996, to: 2000, trims: ["CX", "DX", "LX", "EX", "HX", "Si"] },
      { from: 2001, to: 2005, trims: ["DX", "LX", "EX", "HX", "GX", "Si"] },
      { from: 2006, to: 2011, trims: ["DX-G", "LX", "EX", "GX", "Si", "Hybrid"] },
      { from: 2012, to: 2015, trims: ["LX", "EX", "EX-L", "Si", "Hybrid"] },
      { from: 2016, to: 2021, trims: ["LX", "Sport", "EX", "EX-L", "Touring", "Si", "Type R"] },
      { from: 2022, to: 2024, trims: ["LX", "Sport", "EX", "Sport Touring", "Si", "Type R"] },
    ],
    Accord: [
      { from: 1990, to: 1993, trims: ["DX", "LX", "SE", "EX"] },
      { from: 1994, to: 1997, trims: ["DX", "LX", "EX", "EX Special Edition"] },
      { from: 1998, to: 2002, trims: ["DX", "LX", "LX-V6", "EX", "EX-V6", "EX-L"] },
      { from: 2003, to: 2007, trims: ["DX", "LX", "LX-V6", "EX", "EX-V6", "EX-L", "EX-L V6"] },
      { from: 2008, to: 2012, trims: ["LX", "LX-P", "SE", "EX", "EX-L", "EX-L V6"] },
      { from: 2013, to: 2017, trims: ["LX", "Sport", "EX", "EX-L", "EX-L V6", "Touring", "Touring V6", "Hybrid", "Hybrid Touring", "PHEV"] },
      { from: 2018, to: 2024, trims: ["LX", "Sport", "EX-L", "Touring", "Hybrid Sport", "Hybrid EX-L", "Hybrid Touring"] },
    ],
    "CR-V": [
      { from: 1997, to: 2001, trims: ["Base", "SE"] },
      { from: 2002, to: 2006, trims: ["LX", "EX"] },
      { from: 2007, to: 2011, trims: ["LX", "EX", "EX-L"] },
      { from: 2012, to: 2016, trims: ["LX", "EX", "EX-L", "Touring"] },
      { from: 2017, to: 2022, trims: ["LX", "EX", "EX-L", "Touring", "Hybrid EX", "Hybrid EX-L", "Hybrid Touring"] },
      { from: 2023, to: 2024, trims: ["LX", "EX", "EX-L", "Sport", "Sport Touring", "Hybrid Sport", "Hybrid Sport Touring"] },
    ],
    Pilot: [
      { from: 2003, to: 2008, trims: ["LX", "EX", "EX-L"] },
      { from: 2009, to: 2015, trims: ["LX", "EX-L", "Touring"] },
      { from: 2016, to: 2022, trims: ["LX", "EX", "EX-L", "Touring", "Elite"] },
      { from: 2023, to: 2024, trims: ["Sport", "EX-L", "Touring", "TrailSport", "Elite", "Black Edition"] },
    ],
    Odyssey: [
      { from: 1995, to: 1998, trims: ["Base", "EX"] },
      { from: 1999, to: 2004, trims: ["LX", "EX", "EX-L"] },
      { from: 2005, to: 2010, trims: ["LX", "EX", "EX-L", "Touring"] },
      { from: 2011, to: 2017, trims: ["LX", "EX", "EX-L", "Touring", "Touring Elite"] },
      { from: 2018, to: 2024, trims: ["LX", "EX", "EX-L", "Sport", "Touring", "Elite"] },
    ],
  },
  Ford: {
    "F-150": [
      { from: 1990, to: 1996, trims: ["Regular Cab", "XL", "XLT", "Eddie Bauer", "Lightning", "SVT Lightning"] },
      { from: 1997, to: 2003, trims: ["XL", "XLT", "Lariat", "King Ranch", "Harley-Davidson", "SVT Lightning"] },
      { from: 2004, to: 2008, trims: ["XL", "STX", "XLT", "FX2", "FX4", "Lariat", "King Ranch", "Harley-Davidson"] },
      { from: 2009, to: 2014, trims: ["XL", "STX", "XLT", "FX2", "FX4", "Lariat", "King Ranch", "Platinum", "SVT Raptor"] },
      { from: 2015, to: 2020, trims: ["XL", "XLT", "Lariat", "King Ranch", "Platinum", "Limited", "Raptor"] },
      { from: 2021, to: 2024, trims: ["XL", "XLT", "Lariat", "King Ranch", "Platinum", "Limited", "Raptor", "Raptor R", "Tremor"] },
    ],
    Mustang: [
      { from: 1990, to: 1993, trims: ["LX", "GT", "Cobra"] },
      { from: 1994, to: 1998, trims: ["Base", "GT", "Cobra", "Cobra R"] },
      { from: 1999, to: 2004, trims: ["V6", "GT", "Mach 1", "Cobra", "Cobra R"] },
      { from: 2005, to: 2009, trims: ["V6", "GT", "GT/CS", "Shelby GT500"] },
      { from: 2010, to: 2014, trims: ["V6", "GT", "Boss 302", "Shelby GT500"] },
      { from: 2015, to: 2022, trims: ["EcoBoost", "EcoBoost Premium", "GT", "GT Premium", "Mach 1", "Shelby GT350", "Shelby GT350R", "Shelby GT500"] },
      { from: 2023, to: 2024, trims: ["EcoBoost", "EcoBoost Premium", "GT", "GT Premium", "Mach 1", "Dark Horse", "Dark Horse Premium"] },
    ],
    Explorer: [
      { from: 1991, to: 1994, trims: ["Base", "Sport", "XL", "XLT", "Eddie Bauer", "Limited"] },
      { from: 1995, to: 2001, trims: ["XL", "XLT", "Sport", "Eddie Bauer", "Limited", "NBX"] },
      { from: 2002, to: 2005, trims: ["XLS", "XLT", "Eddie Bauer", "NBX", "Limited"] },
      { from: 2006, to: 2010, trims: ["XLS", "XLT", "Eddie Bauer", "Limited", "Sport Trac"] },
      { from: 2011, to: 2019, trims: ["Base", "XLT", "Limited", "Sport", "Platinum"] },
      { from: 2020, to: 2024, trims: ["Base", "XLT", "ST-Line", "Limited", "ST", "Timberline", "King Ranch", "Platinum"] },
    ],
    Escape: [
      { from: 2001, to: 2007, trims: ["XLS", "XLT", "XLT Sport", "Limited", "Hybrid"] },
      { from: 2008, to: 2012, trims: ["XLS", "XLT", "Limited", "Hybrid"] },
      { from: 2013, to: 2019, trims: ["S", "SE", "Titanium", "Hybrid SE", "PHEV SE"] },
      { from: 2020, to: 2024, trims: ["S", "SE", "SE Sport", "ST-Line", "SEL", "Titanium", "Hybrid SE", "Hybrid SEL", "Hybrid Titanium", "PHEV SE", "PHEV Titanium"] },
    ],
    Focus: [
      { from: 2000, to: 2007, trims: ["LX", "SE", "ZX3", "ZX4", "ZX5", "ZXW", "ST", "SVT"] },
      { from: 2008, to: 2011, trims: ["S", "SE", "SES", "SEL", "SES Sport"] },
      { from: 2012, to: 2018, trims: ["S", "SE", "SE Sport", "SEL", "Titanium", "ST", "RS"] },
    ],
  },
  Chevrolet: {
    Silverado: [
      { from: 1999, to: 2006, trims: ["Work Truck", "LS", "LT", "LTZ", "SS"] },
      { from: 2007, to: 2013, trims: ["Work Truck", "LS", "LT", "LTZ", "Hybrid"] },
      { from: 2014, to: 2018, trims: ["Work Truck", "LS", "LT", "LT Z71", "LTZ", "High Country"] },
      { from: 2019, to: 2024, trims: ["Work Truck", "Custom", "Custom Trail Boss", "LS", "LT", "RST", "LTZ", "High Country", "Trail Boss", "ZR2"] },
    ],
    Malibu: [
      { from: 1997, to: 2003, trims: ["Base", "LS"] },
      { from: 2004, to: 2007, trims: ["LS", "LT", "Maxx LS", "Maxx LT"] },
      { from: 2008, to: 2012, trims: ["LS", "LT", "LTZ", "Hybrid"] },
      { from: 2013, to: 2015, trims: ["LS", "LT", "LTZ", "Turbo"] },
      { from: 2016, to: 2024, trims: ["LS", "1LT", "2LT", "RS", "Premier"] },
    ],
    Equinox: [
      { from: 2005, to: 2009, trims: ["LS", "LT", "Sport"] },
      { from: 2010, to: 2017, trims: ["LS", "LT", "LTZ", "Sport"] },
      { from: 2018, to: 2024, trims: ["LS", "LT", "RS", "Premier"] },
    ],
    Camaro: [
      { from: 1990, to: 1992, trims: ["Base", "RS", "IROC-Z", "Z28"] },
      { from: 1993, to: 2002, trims: ["Base", "RS", "Z28", "SS", "Z28 30th Anniversary"] },
      { from: 2010, to: 2015, trims: ["LS", "LT", "RS", "SS", "ZL1", "1LE"] },
      { from: 2016, to: 2024, trims: ["1LT", "2LT", "3LT", "1SS", "2SS", "ZL1", "ZL1 1LE", "COPO"] },
    ],
    Traverse: [
      { from: 2009, to: 2017, trims: ["LS", "LT", "LTZ", "LT FWD", "LTZ FWD"] },
      { from: 2018, to: 2024, trims: ["LS", "LT", "RS", "Premier", "High Country", "Z71"] },
    ],
  },
  Subaru: {
    Outback: [
      { from: 1995, to: 1999, trims: ["Base", "Limited"] },
      { from: 2000, to: 2004, trims: ["Base", "L.L. Bean", "VDC", "Sedan"] },
      { from: 2005, to: 2009, trims: ["Base", "2.5i", "XT", "XT Limited", "3.0R", "3.0R VDC", "L.L. Bean"] },
      { from: 2010, to: 2014, trims: ["2.5i", "2.5i Premium", "2.5i Limited", "3.6R", "3.6R Limited"] },
      { from: 2015, to: 2019, trims: ["2.5i", "2.5i Premium", "2.5i Limited", "3.6R", "3.6R Touring", "3.6R Limited"] },
      { from: 2020, to: 2024, trims: ["Base", "Premium", "Limited", "Touring", "Onyx Edition", "Onyx Edition XT", "Limited XT", "Touring XT", "Wilderness"] },
    ],
    Forester: [
      { from: 1998, to: 2002, trims: ["L", "S", "Limited"] },
      { from: 2003, to: 2008, trims: ["X", "XS", "XT", "XT Limited"] },
      { from: 2009, to: 2013, trims: ["X", "X Premium", "X Limited", "XT", "XT Premium", "XT Touring"] },
      { from: 2014, to: 2018, trims: ["2.5i", "2.5i Premium", "2.5i Sport", "2.5i Limited", "2.5i Touring", "XT Premium", "XT Touring"] },
      { from: 2019, to: 2024, trims: ["Base", "Premium", "Sport", "Limited", "Touring"] },
    ],
    Impreza: [
      { from: 1993, to: 2001, trims: ["L", "LX", "Outback Sport", "RS", "2.5RS"] },
      { from: 2002, to: 2007, trims: ["Base", "Outback Sport", "WRX", "RS", "TS"] },
      { from: 2008, to: 2011, trims: ["2.5i", "2.5i Premium", "2.5i Sport", "2.5i Limited", "Outback Sport", "WRX"] },
      { from: 2012, to: 2016, trims: ["2.0i", "2.0i Premium", "2.0i Sport Limited", "2.0i Sport Premium", "2.0i Limited", "WRX"] },
      { from: 2017, to: 2024, trims: ["Base", "Premium", "Sport", "Limited", "RS"] },
    ],
    WRX: [
      { from: 2002, to: 2007, trims: ["WRX", "WRX Limited", "STI", "STI Limited", "STI Spec C"] },
      { from: 2008, to: 2014, trims: ["WRX", "WRX Limited", "WRX Sport", "STI", "STI Limited", "STI Special Edition"] },
      { from: 2015, to: 2021, trims: ["Base", "Premium", "Limited", "STI", "STI Limited", "STI Sport", "STI Sport-tech"] },
      { from: 2022, to: 2024, trims: ["Base", "Premium", "Limited", "GT", "STI"] },
    ],
    Crosstrek: [
      { from: 2013, to: 2017, trims: ["2.0i", "2.0i Premium", "2.0i Limited", "Hybrid"] },
      { from: 2018, to: 2023, trims: ["Base", "Premium", "Sport", "Limited", "Wilderness", "Hybrid"] },
      { from: 2024, to: 2024, trims: ["Base", "Premium", "Sport", "Limited", "Wilderness"] },
    ],
  },
  Nissan: {
    Altima: [
      { from: 1993, to: 1997, trims: ["XE", "GXE", "GLE", "SE"] },
      { from: 1998, to: 2001, trims: ["XE", "GXE", "GLE", "SE", "SE-R"] },
      { from: 2002, to: 2006, trims: ["2.5", "2.5 S", "2.5 SL", "3.5 SE", "3.5 SL"] },
      { from: 2007, to: 2012, trims: ["2.5", "2.5 S", "2.5 SL", "3.5 SE", "3.5 SR", "3.5 SL", "Hybrid"] },
      { from: 2013, to: 2018, trims: ["2.5", "2.5 S", "2.5 SV", "2.5 SL", "3.5 SL", "2.5 SR"] },
      { from: 2019, to: 2024, trims: ["S", "SR", "SV", "SL", "Platinum", "SR AWD", "SV AWD"] },
    ],
    Rogue: [
      { from: 2008, to: 2013, trims: ["S", "SV", "SL", "Krom Edition"] },
      { from: 2014, to: 2020, trims: ["S", "SV", "SL", "Midnight Edition"] },
      { from: 2021, to: 2024, trims: ["S", "SV", "SL", "Platinum"] },
    ],
    Sentra: [
      { from: 1990, to: 1994, trims: ["E", "XE", "GXE", "SE", "SE-R", "LE"] },
      { from: 1995, to: 1999, trims: ["Base", "XE", "GXE", "GLE", "SE", "SE-R"] },
      { from: 2000, to: 2006, trims: ["XE", "GXE", "GLE", "SE", "SE-R", "SE-R Spec V", "CA"] },
      { from: 2007, to: 2012, trims: ["Base", "2.0", "2.0 S", "2.0 SR", "2.0 SL", "SE-R", "SE-R Spec V"] },
      { from: 2013, to: 2019, trims: ["FE+", "S", "SV", "SR", "SL", "Nismo"] },
      { from: 2020, to: 2024, trims: ["S", "SV", "SR", "SL"] },
    ],
    Frontier: [
      { from: 1998, to: 2004, trims: ["Base", "XE", "GXE", "SC", "Desert Runner", "SE"] },
      { from: 2005, to: 2021, trims: ["S", "SV", "PRO-X", "PRO-4X", "Desert Runner", "SL"] },
      { from: 2022, to: 2024, trims: ["S", "SV", "PRO-X", "PRO-4X", "Hardbody Edition"] },
    ],
    Pathfinder: [
      { from: 1990, to: 1995, trims: ["Base", "SE", "XE"] },
      { from: 1996, to: 2004, trims: ["XE", "SE", "LE", "SE-L"] },
      { from: 2005, to: 2012, trims: ["S", "SE", "LE", "SE Off-Road", "Silver Edition"] },
      { from: 2013, to: 2021, trims: ["S", "SV", "SL", "Platinum"] },
      { from: 2022, to: 2024, trims: ["S", "SV", "SL", "Rock Creek", "Platinum"] },
    ],
  },
  BMW: {
    "3 Series": [
      { from: 1990, to: 1998, trims: ["318i", "318is", "318ti", "323i", "325i", "325is", "328i", "328is", "M3"] },
      { from: 1999, to: 2005, trims: ["323i", "325i", "325xi", "328i", "330i", "330xi", "M3"] },
      { from: 2006, to: 2011, trims: ["325i", "325xi", "328i", "328xi", "330i", "335i", "335xi", "M3"] },
      { from: 2012, to: 2018, trims: ["320i", "328i", "328d", "335i", "340i", "320i xDrive", "328i xDrive", "340i xDrive", "M3"] },
      { from: 2019, to: 2024, trims: ["330i", "330e", "330i xDrive", "M340i", "M340i xDrive", "M3", "M3 Competition"] },
    ],
    "5 Series": [
      { from: 1990, to: 1995, trims: ["525i", "530i", "535i", "540i", "M5"] },
      { from: 1996, to: 2003, trims: ["528i", "540i", "M5"] },
      { from: 2004, to: 2010, trims: ["525i", "525xi", "528i", "528xi", "530i", "530xi", "535i", "535xi", "545i", "550i", "M5"] },
      { from: 2011, to: 2016, trims: ["528i", "535i", "550i", "528i xDrive", "535i xDrive", "550i xDrive", "ActiveHybrid 5", "M5"] },
      { from: 2017, to: 2024, trims: ["530i", "530i xDrive", "530e", "540i", "540i xDrive", "550i", "M550i xDrive", "M5", "M5 Competition"] },
    ],
    X3: [
      { from: 2004, to: 2010, trims: ["2.5i", "3.0i", "3.0si", "3.0sd"] },
      { from: 2011, to: 2017, trims: ["xDrive28i", "xDrive35i", "xDrive28d", "M40i"] },
      { from: 2018, to: 2024, trims: ["sDrive30i", "xDrive30i", "M40i", "xDrive30e", "M"] },
    ],
    X5: [
      { from: 2000, to: 2006, trims: ["3.0i", "4.4i", "4.6is", "4.8is"] },
      { from: 2007, to: 2013, trims: ["xDrive30i", "xDrive35i", "xDrive48i", "xDrive50i", "M"] },
      { from: 2014, to: 2018, trims: ["xDrive35i", "xDrive35d", "xDrive50i", "eDrive", "M"] },
      { from: 2019, to: 2024, trims: ["xDrive40i", "xDrive50i", "M50i", "xDrive45e", "M60i xDrive", "M"] },
    ],
    M3: [
      { from: 1988, to: 1991, trims: ["Base"] },
      { from: 1995, to: 1999, trims: ["Base", "Lightweight"] },
      { from: 2001, to: 2006, trims: ["Base", "CSL"] },
      { from: 2008, to: 2013, trims: ["Base", "Competition", "GTS", "CRT"] },
      { from: 2015, to: 2020, trims: ["Base", "Competition"] },
      { from: 2021, to: 2024, trims: ["Base", "Competition", "Competition xDrive", "CS", "CSL"] },
    ],
  },
};

function getTrims(make, model, year) {
  const ranges = TRIMS[make]?.[model];
  if (!ranges) return [];
  const yr = Number(year);
  const match = ranges.find(r => yr >= r.from && yr <= r.to);
  return match?.trims || [];
}

const YEARS = Array.from({ length: 35 }, (_, i) => 2024 - i);

const PARTS = [
  // Maintenance
  "Oil filter",
  "Air filter",
  "Cabin air filter",
  "Spark plugs",
  "PCV valve",
  "Oil drain plug washer",
  // Belts & Timing
  "Timing belt",
  "Timing belt tensioner",
  "Timing chain",
  "Serpentine belt",
  "Drive belt (alternator)",
  "Drive belt (A/C)",
  // Cooling
  "Water pump",
  "Thermostat",
  "Radiator",
  "Coolant temperature sensor",
  "Radiator cap",
  // Brakes
  "Brake pads (front)",
  "Brake pads (rear)",
  "Brake rotor (front)",
  "Brake rotor (rear)",
  "Brake shoes (rear)",
  "Brake drum (rear)",
  // Engine gaskets & seals
  "Valve cover gasket",
  "Head gasket",
  "Front crankshaft seal",
  "Camshaft seal",
  // Fuel system
  "Fuel pump",
  "Fuel injectors",
  "IAC valve",
  "EVAP purge solenoid",
  // Sensors
  "O2 sensor (upstream)",
  "O2 sensor (downstream)",
  "MAP sensor",
  "Crankshaft position sensor",
  "Camshaft position sensor",
  "Oil pressure switch",
  "Knock sensor",
  "Ignition coil",
  "EGR valve",
  // Suspension & steering
  "Wheel bearing (front)",
  "Wheel bearing (rear)",
  "Ball joint (lower)",
  "Tie rod end (outer)",
  "Sway bar end link",
  "Strut mount bearing",
  // Drivetrain
  "Alternator",
  "Starter motor",
  "Transmission fluid (manual)",
  "Transmission fluid (automatic)",
  "ATF filter",
  // Transmission seals & bearings
  "Axle seal (driver)",
  "Axle seal (passenger)",
  "Trans input shaft seal",
  "Trans input shaft bearing",
  "Trans torque converter seal",
];

// Which trims use a non-default engine — used to filter DB results by engine hint
const TRIM_ENGINE_MAP = {
  "Honda|Civic|Si": "K20",   // 2001-2005 Si hatchback has K20A3, not D17
};

// Which part types belong exclusively to manual or automatic trans
const PARTS_TRANS = {
  "Transmission fluid (manual)": "manual",
  "Trans input shaft seal":       "manual",
  "Trans input shaft bearing":    "manual",
  "Transmission fluid (automatic)": "auto",
  "ATF filter":                   "auto",
  "Trans torque converter seal":  "auto",
};

// Available transmission types per make/model/year range
// t: array containing any of "manual" | "auto" | "cvt"
const TRANS_AVAIL = {
  Toyota: {
    Camry:     [{ from: 1990, to: 2001, t: ["manual","auto"] }, { from: 2002, to: 2024, t: ["auto"] }],
    Corolla:   [{ from: 1990, to: 2013, t: ["manual","auto"] }, { from: 2014, to: 2024, t: ["manual","auto","cvt"] }],
    RAV4:      [{ from: 1996, to: 2005, t: ["manual","auto"] }, { from: 2006, to: 2024, t: ["auto"] }],
    Tacoma:    [{ from: 1995, to: 2024, t: ["manual","auto"] }],
    Highlander:[{ from: 2001, to: 2024, t: ["auto"] }],
    "4Runner": [{ from: 1990, to: 2002, t: ["manual","auto"] }, { from: 2003, to: 2024, t: ["auto"] }],
  },
  Honda: {
    Civic:     [
      { from: 1990, to: 1995, t: ["manual","auto"] },
      { from: 1996, to: 2005, t: ["manual","auto","cvt"] }, // HX trim had SDTF CVT
      { from: 2006, to: 2024, t: ["manual","auto","cvt"] },
    ],
    Accord:    [{ from: 1990, to: 2012, t: ["manual","auto"] }, { from: 2013, to: 2024, t: ["manual","auto","cvt"] }],
    "CR-V":    [{ from: 1997, to: 2001, t: ["manual","auto"] }, { from: 2002, to: 2016, t: ["auto"] }, { from: 2017, to: 2024, t: ["auto","cvt"] }],
    Pilot:     [{ from: 2003, to: 2024, t: ["auto"] }],
    Odyssey:   [{ from: 1995, to: 2024, t: ["auto"] }],
  },
  Ford: {
    "F-150":   [{ from: 1990, to: 2024, t: ["manual","auto"] }],
    Mustang:   [{ from: 1990, to: 2024, t: ["manual","auto"] }],
    Explorer:  [{ from: 1991, to: 2024, t: ["auto"] }],
    Escape:    [{ from: 2001, to: 2004, t: ["manual","auto","cvt"] }, { from: 2005, to: 2024, t: ["auto"] }],
    Focus:     [{ from: 2000, to: 2018, t: ["manual","auto"] }],
  },
  Chevrolet: {
    Silverado: [{ from: 1999, to: 2019, t: ["manual","auto"] }, { from: 2020, to: 2024, t: ["auto"] }],
    Malibu:    [{ from: 1997, to: 2004, t: ["manual","auto"] }, { from: 2005, to: 2024, t: ["auto"] }],
    Equinox:   [{ from: 2005, to: 2024, t: ["auto"] }],
    Camaro:    [{ from: 1993, to: 2024, t: ["manual","auto"] }],
    Traverse:  [{ from: 2009, to: 2024, t: ["auto"] }],
  },
  Subaru: {
    Outback:   [{ from: 1995, to: 2009, t: ["manual","auto"] }, { from: 2010, to: 2024, t: ["manual","auto","cvt"] }],
    Forester:  [{ from: 1998, to: 2013, t: ["manual","auto"] }, { from: 2014, to: 2024, t: ["manual","auto","cvt"] }],
    Impreza:   [{ from: 1993, to: 2011, t: ["manual","auto"] }, { from: 2012, to: 2024, t: ["manual","auto","cvt"] }],
    WRX:       [{ from: 2002, to: 2014, t: ["manual","auto"] }, { from: 2015, to: 2024, t: ["manual","cvt"] }],
    Crosstrek: [{ from: 2013, to: 2024, t: ["manual","cvt"] }],
  },
  Nissan: {
    Altima:    [{ from: 1993, to: 2006, t: ["manual","auto"] }, { from: 2007, to: 2024, t: ["auto","cvt"] }],
    Rogue:     [{ from: 2008, to: 2024, t: ["cvt"] }],
    Sentra:    [{ from: 1995, to: 2006, t: ["manual","auto"] }, { from: 2007, to: 2024, t: ["auto","cvt"] }],
    Frontier:  [{ from: 1998, to: 2024, t: ["manual","auto"] }],
    Pathfinder:[{ from: 1987, to: 2004, t: ["manual","auto"] }, { from: 2005, to: 2024, t: ["auto"] }],
  },
  BMW: {
    "3 Series":[{ from: 1992, to: 2024, t: ["manual","auto"] }],
    "5 Series":[{ from: 1989, to: 2003, t: ["manual","auto"] }, { from: 2004, to: 2024, t: ["auto"] }],
    X3:        [{ from: 2004, to: 2024, t: ["auto"] }],
    X5:        [{ from: 2000, to: 2024, t: ["auto"] }],
    M3:        [{ from: 1987, to: 2024, t: ["manual","auto"] }],
  },
};

function getTransOptions(make, model, year) {
  if (!make || !model || !year) return ["manual", "auto", "cvt"];
  const ranges = TRANS_AVAIL[make]?.[model];
  if (!ranges) return ["manual", "auto", "cvt"];
  const yr = Number(year);
  const match = ranges.find(r => yr >= r.from && yr <= r.to);
  return match ? match.t : ["manual", "auto"];
}

// Brand logo URLs — Honda uses the H emblem SVG; others use Google favicon API
const BRAND_LOGOS = {
  Toyota:    "https://www.google.com/s2/favicons?domain=toyota.com&sz=256",
  Honda:     "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/240px-Honda_Logo.svg.png",
  Ford:      "https://www.google.com/s2/favicons?domain=ford.com&sz=256",
  Chevrolet: "https://www.google.com/s2/favicons?domain=chevrolet.com&sz=256",
  Subaru:    "https://www.google.com/s2/favicons?domain=subaru.com&sz=256",
  Nissan:    "https://www.google.com/s2/favicons?domain=nissanusa.com&sz=256",
  BMW:       "https://www.google.com/s2/favicons?domain=bmw.com&sz=256",
};

// Trims that lock in a specific transmission type
const TRIM_TRANS_MAP = {
  "Honda|Civic|HX":  "cvt",   // 7th-gen HX (2001-2005) used SDTF CVT only
  "Honda|Civic|GX":  "auto",  // GX (CNG) was automatic only
};

const MAKE_COLORS = {
  Toyota: "#eb0a1e",
  Honda: "#cc0000",
  Ford: "#003087",
  Chevrolet: "#D4AF37",
  Subaru: "#003F8A",
  Nissan: "#C3002F",
  BMW: "#0066CC",
};

function loadGarage() {
  try { return JSON.parse(localStorage.getItem("partsfit_garage") || "[]"); }
  catch { return []; }
}
function persistGarage(list) {
  localStorage.setItem("partsfit_garage", JSON.stringify(list));
}

// ─── Maintenance Tracker ─────────────────────────────────────────────────────

const MAINTENANCE_ITEMS = [
  { key: "oil_change",         label: "Oil Change",          icon: "🛢️" },
  { key: "tire_rotation",      label: "Tire Rotation",       icon: "🔄" },
  { key: "air_filter",         label: "Engine Air Filter",   icon: "💨" },
  { key: "cabin_filter",       label: "Cabin Air Filter",    icon: "❄️" },
  { key: "spark_plugs",        label: "Spark Plugs",         icon: "⚡" },
  { key: "coolant_flush",      label: "Coolant Flush",       icon: "💧" },
  { key: "transmission_fluid", label: "Transmission Fluid",  icon: "⚙️" },
  { key: "brake_fluid",        label: "Brake Fluid",         icon: "🛑" },
  { key: "timing_belt",        label: "Timing Belt",         icon: "⏱️" },
  { key: "serpentine_belt",    label: "Serpentine Belt",     icon: "〰️" },
];

// Intervals from factory service manuals — { miles, months } or null = timing chain (no service)
const MAINTENANCE_SCHEDULES = {
  Honda: {
    oil_change:          { miles: 5000,   months: 6  }, // pre-Minder (pre-2007); Minder models vary
    tire_rotation:       { miles: 7500,   months: 6  },
    air_filter:          { miles: 30000,  months: 24 },
    cabin_filter:        { miles: 15000,  months: 12 },
    spark_plugs:         { miles: 30000,  months: 36 }, // copper/platinum; iridium (2017+) = 100k
    coolant_flush:       { miles: 60000,  months: 60 }, // Honda Type 2 coolant
    transmission_fluid:  { miles: 90000,  months: 72 }, // ATF DW-1 normal conditions
    brake_fluid:         { miles: 45000,  months: 36 }, // Honda: every 3 years
    timing_belt:         null,                          // 2001+ Civic D17 = chain; Accord check year
    serpentine_belt:     { miles: 60000,  months: 48 },
  },
  Toyota: {
    oil_change:          { miles: 5000,   months: 6  },
    tire_rotation:       { miles: 5000,   months: 6  },
    air_filter:          { miles: 30000,  months: 24 },
    cabin_filter:        { miles: 15000,  months: 12 },
    spark_plugs:         { miles: 60000,  months: 60 }, // iridium standard since ~2003
    coolant_flush:       { miles: 100000, months: 120 }, // Toyota SLLC (red/pink)
    transmission_fluid:  { miles: 60000,  months: 48 },
    brake_fluid:         { miles: 30000,  months: 24 }, // Toyota: every 2 years
    timing_belt:         null,                          // 2002+ 4-cyl Camry/Tacoma/4Runner = chain
    serpentine_belt:     { miles: 60000,  months: 48 },
  },
  Ford: {
    oil_change:          { miles: 7500,   months: 6  }, // Ford Motorcraft recommendation
    tire_rotation:       { miles: 7500,   months: 6  },
    air_filter:          { miles: 30000,  months: 24 },
    cabin_filter:        { miles: 20000,  months: 12 },
    spark_plugs:         { miles: 100000, months: 120 }, // iridium (most modern Ford)
    coolant_flush:       { miles: 100000, months: 60 }, // then every 50k / 3 yr
    transmission_fluid:  { miles: 60000,  months: 48 }, // factory says "lifetime"; 60k recommended
    brake_fluid:         { miles: 36000,  months: 36 },
    timing_belt:         null,                          // most modern Ford use chains
    serpentine_belt:     { miles: 100000, months: 72 },
  },
  Chevrolet: {
    oil_change:          { miles: 7500,   months: 12 }, // GM OLM avg; change at least annually
    tire_rotation:       { miles: 7500,   months: 6  },
    air_filter:          { miles: 30000,  months: 24 },
    cabin_filter:        { miles: 24000,  months: 12 },
    spark_plugs:         { miles: 30000,  months: 24 }, // older; ACDelco iridium = 100k
    coolant_flush:       { miles: 150000, months: 60 }, // DEX-COOL 5yr/150k
    transmission_fluid:  { miles: 45000,  months: 36 },
    brake_fluid:         { miles: 45000,  months: 36 },
    timing_belt:         null,                          // all modern Chevy use timing chains
    serpentine_belt:     { miles: 100000, months: 72 },
  },
  Subaru: {
    oil_change:          { miles: 6000,   months: 6  }, // non-turbo; turbo = 3,750 mi
    tire_rotation:       { miles: 7500,   months: 6  },
    air_filter:          { miles: 30000,  months: 24 },
    cabin_filter:        { miles: 15000,  months: 12 },
    spark_plugs:         { miles: 60000,  months: 48 }, // iridium (EJ/FA/FB engines)
    coolant_flush:       { miles: 30000,  months: 24 }, // Subaru Super Coolant (blue-green)
    transmission_fluid:  { miles: 30000,  months: 24 }, // CVT fluid critical; AT also 30k
    brake_fluid:         { miles: 30000,  months: 30 },
    timing_belt:         { miles: 100000, months: 84 }, // EJ-series (Outback/Legacy/WRX/older Impreza)
    serpentine_belt:     { miles: 60000,  months: 48 },
  },
  Nissan: {
    oil_change:          { miles: 5000,   months: 6  },
    tire_rotation:       { miles: 7500,   months: 6  },
    air_filter:          { miles: 15000,  months: 12 },
    cabin_filter:        { miles: 15000,  months: 12 },
    spark_plugs:         { miles: 60000,  months: 48 }, // platinum; iridium = 105k
    coolant_flush:       { miles: 60000,  months: 36 }, // Nissan Long Life coolant
    transmission_fluid:  { miles: 30000,  months: 24 }, // CVT fluid — factory-critical, NOT lifetime
    brake_fluid:         { miles: 24000,  months: 24 },
    timing_belt:         null,                          // modern Nissan (VQ, QR, MR) = chain
    serpentine_belt:     { miles: 60000,  months: 48 },
  },
  BMW: {
    oil_change:          { miles: 10000,  months: 12 }, // CBS; change at minimum annually
    tire_rotation:       { miles: 10000,  months: 12 },
    air_filter:          { miles: 30000,  months: 24 },
    cabin_filter:        { miles: 15000,  months: 12 },
    spark_plugs:         { miles: 60000,  months: 48 },
    coolant_flush:       { miles: 50000,  months: 36 }, // BMW blue coolant
    transmission_fluid:  { miles: 60000,  months: 48 }, // "lifetime" — recommended change
    brake_fluid:         { miles: 30000,  months: 24 }, // BMW: every 2 years — non-negotiable
    timing_belt:         null,                          // modern BMW use timing chains
    serpentine_belt:     { miles: 50000,  months: 48 },
  },
};

const DEFAULT_SCHEDULE = {
  oil_change:          { miles: 5000,   months: 6  },
  tire_rotation:       { miles: 7500,   months: 6  },
  air_filter:          { miles: 30000,  months: 24 },
  cabin_filter:        { miles: 15000,  months: 12 },
  spark_plugs:         { miles: 60000,  months: 48 },
  coolant_flush:       { miles: 50000,  months: 36 },
  transmission_fluid:  { miles: 60000,  months: 48 },
  brake_fluid:         { miles: 36000,  months: 24 },
  timing_belt:         { miles: 100000, months: 84 },
  serpentine_belt:     { miles: 60000,  months: 48 },
};

// Maps maintenance service keys → part_type values stored in Supabase
const SERVICE_PART_MAP = {
  oil_change:      "Oil filter",
  air_filter:      "Air filter",
  cabin_filter:    "Cabin air filter",
  spark_plugs:     "Spark plugs",
  timing_belt:     "Timing belt",
  serpentine_belt: "Serpentine belt",
};

// Estimated DIY parts cost (labor not included)
const PRICE_ESTIMATES = {
  oil_change:          { low: 25,  high: 60,  note: "filter + 5 qt oil"  },
  tire_rotation:       { low: 0,   high: 15,  note: "often free at shops" },
  air_filter:          { low: 12,  high: 35,  note: "part only"           },
  cabin_filter:        { low: 12,  high: 30,  note: "part only"           },
  spark_plugs:         { low: 20,  high: 80,  note: "set of 4"            },
  coolant_flush:       { low: 15,  high: 40,  note: "coolant only"        },
  transmission_fluid:  { low: 30,  high: 90,  note: "fluid only"          },
  brake_fluid:         { low: 10,  high: 25,  note: "fluid only"          },
  timing_belt:         { low: 30,  high: 100, note: "belt kit"            },
  serpentine_belt:     { low: 15,  high: 55,  note: "belt only"           },
};

function loadMaintenance() {
  try { return JSON.parse(localStorage.getItem("partsfit_maintenance") || "{}"); }
  catch { return {}; }
}
function persistMaintenance(d) { localStorage.setItem("partsfit_maintenance", JSON.stringify(d)); }

function buildEngineString(results) {
  const get = (v) => results.find((r) => r.Variable === v)?.Value || "";
  const disp = get("Displacement (L)");
  const cyls = get("Engine Number of Cylinders");
  const fuel = get("Fuel Type - Primary");
  const code = get("Engine Model");
  let config = "";
  if (cyls === "4") config = "I4";
  else if (cyls === "6") config = "V6";
  else if (cyls === "8") config = "V8";
  else if (cyls === "3") config = "I3";
  else if (cyls === "12") config = "V12";
  const parts = [];
  if (disp) parts.push(`${disp}L`);
  if (config) parts.push(config);
  if (fuel && fuel !== "Gasoline") parts.push(fuel);
  if (code && code !== "Not Applicable") parts.push(code);
  return parts.join(" ");
}

// ─── Feature 1: NHTSA Recall Lookup ─────────────────────────────────────────
// Free, no API key. recallsByVehicle returns { Count, results: [...] }
async function fetchNhtsaRecalls(make, model, year) {
  try {
    const res = await fetch(
      `https://api.nhtsa.gov/recalls/recallsByVehicle?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&modelYear=${year}`
    );
    const json = await res.json();
    return json.results || [];
  } catch { return []; }
}

// ─── Feature 2: DTC Fault Code Lookup ────────────────────────────────────────
// Generic OBD-II P-codes (SAE J2012 standard — manufacturer-neutral)
const DTC_CODES = {
  P0100: { desc: "Mass Air Flow Sensor Circuit Malfunction",            system: "Air Intake",   severity: "moderate", parts: ["Mass air flow sensor", "Air filter", "Intake boot/hose"] },
  P0101: { desc: "MAF Sensor Range/Performance",                        system: "Air Intake",   severity: "moderate", parts: ["Mass air flow sensor", "Air filter"] },
  P0102: { desc: "MAF Sensor Circuit Low Input",                        system: "Air Intake",   severity: "moderate", parts: ["Mass air flow sensor", "Wiring harness"] },
  P0103: { desc: "MAF Sensor Circuit High Input",                       system: "Air Intake",   severity: "moderate", parts: ["Mass air flow sensor"] },
  P0110: { desc: "Intake Air Temperature Sensor Circuit Malfunction",   system: "Air Intake",   severity: "low",      parts: ["Intake air temperature sensor"] },
  P0115: { desc: "Engine Coolant Temperature Sensor Circuit Malfunction", system: "Cooling",    severity: "moderate", parts: ["Coolant temperature sensor", "Thermostat"] },
  P0116: { desc: "Coolant Temperature Sensor Range/Performance",        system: "Cooling",      severity: "moderate", parts: ["Coolant temperature sensor"] },
  P0117: { desc: "Coolant Temperature Sensor Circuit Low Input",        system: "Cooling",      severity: "moderate", parts: ["Coolant temperature sensor"] },
  P0125: { desc: "Insufficient Coolant Temp for Closed-Loop Fuel Control", system: "Cooling",   severity: "moderate", parts: ["Thermostat", "Coolant temperature sensor"] },
  P0128: { desc: "Coolant Temperature Below Thermostat Regulating Temp", system: "Cooling",     severity: "moderate", parts: ["Thermostat"] },
  P0130: { desc: "O2 Sensor Circuit Malfunction (Bank 1, Sensor 1)",    system: "Emissions",    severity: "moderate", parts: ["Upstream O2 sensor", "Wiring/connector"] },
  P0131: { desc: "O2 Sensor Circuit Low Voltage (Bank 1, Sensor 1)",    system: "Emissions",    severity: "moderate", parts: ["Upstream O2 sensor"] },
  P0132: { desc: "O2 Sensor Circuit High Voltage (Bank 1, Sensor 1)",   system: "Emissions",    severity: "moderate", parts: ["Upstream O2 sensor"] },
  P0135: { desc: "O2 Sensor Heater Circuit Malfunction (Bank 1, Sensor 1)", system: "Emissions", severity: "moderate", parts: ["Upstream O2 sensor"] },
  P0136: { desc: "O2 Sensor Circuit Malfunction (Bank 1, Sensor 2)",    system: "Emissions",    severity: "moderate", parts: ["Downstream O2 sensor"] },
  P0141: { desc: "O2 Sensor Heater Circuit Malfunction (Bank 1, Sensor 2)", system: "Emissions", severity: "moderate", parts: ["Downstream O2 sensor"] },
  P0150: { desc: "O2 Sensor Circuit Malfunction (Bank 2, Sensor 1)",    system: "Emissions",    severity: "moderate", parts: ["Upstream O2 sensor (bank 2)"] },
  P0155: { desc: "O2 Sensor Heater Circuit Malfunction (Bank 2, Sensor 1)", system: "Emissions", severity: "moderate", parts: ["Upstream O2 sensor (bank 2)"] },
  P0171: { desc: "System Too Lean (Bank 1)",                            system: "Fuel",         severity: "moderate", parts: ["MAF sensor", "Upstream O2 sensor", "Vacuum leak check", "Fuel injectors", "Spark plugs"] },
  P0172: { desc: "System Too Rich (Bank 1)",                            system: "Fuel",         severity: "moderate", parts: ["MAF sensor", "Fuel injectors", "Fuel pressure regulator"] },
  P0174: { desc: "System Too Lean (Bank 2)",                            system: "Fuel",         severity: "moderate", parts: ["MAF sensor", "Vacuum leak check", "Fuel injectors"] },
  P0175: { desc: "System Too Rich (Bank 2)",                            system: "Fuel",         severity: "moderate", parts: ["Fuel injectors", "Fuel pressure regulator"] },
  P0300: { desc: "Random/Multiple Cylinder Misfire",                    system: "Ignition",     severity: "high",     parts: ["Spark plugs", "Ignition coils", "Fuel injectors", "Compression test"] },
  P0301: { desc: "Cylinder 1 Misfire Detected",                         system: "Ignition",     severity: "high",     parts: ["Spark plug (cyl 1)", "Ignition coil (cyl 1)", "Fuel injector (cyl 1)"] },
  P0302: { desc: "Cylinder 2 Misfire Detected",                         system: "Ignition",     severity: "high",     parts: ["Spark plug (cyl 2)", "Ignition coil (cyl 2)", "Fuel injector (cyl 2)"] },
  P0303: { desc: "Cylinder 3 Misfire Detected",                         system: "Ignition",     severity: "high",     parts: ["Spark plug (cyl 3)", "Ignition coil (cyl 3)", "Fuel injector (cyl 3)"] },
  P0304: { desc: "Cylinder 4 Misfire Detected",                         system: "Ignition",     severity: "high",     parts: ["Spark plug (cyl 4)", "Ignition coil (cyl 4)", "Fuel injector (cyl 4)"] },
  P0325: { desc: "Knock Sensor 1 Circuit Malfunction",                  system: "Ignition",     severity: "moderate", parts: ["Knock sensor", "Wiring harness"] },
  P0335: { desc: "Crankshaft Position Sensor Circuit Malfunction",      system: "Ignition",     severity: "high",     parts: ["Crankshaft position sensor"] },
  P0340: { desc: "Camshaft Position Sensor Circuit Malfunction",        system: "Ignition",     severity: "high",     parts: ["Camshaft position sensor"] },
  P0341: { desc: "Camshaft Position Sensor Range/Performance",          system: "Ignition",     severity: "high",     parts: ["Camshaft position sensor", "Timing chain/belt"] },
  P0401: { desc: "EGR Flow Insufficient Detected",                      system: "Emissions",    severity: "low",      parts: ["EGR valve", "EGR passages (carbon buildup)"] },
  P0404: { desc: "EGR Circuit Range/Performance",                       system: "Emissions",    severity: "low",      parts: ["EGR valve", "EGR position sensor"] },
  P0410: { desc: "Secondary Air Injection System Malfunction",          system: "Emissions",    severity: "low",      parts: ["Air pump", "Air pump relay", "Check valve"] },
  P0420: { desc: "Catalyst System Efficiency Below Threshold (Bank 1)", system: "Emissions",    severity: "moderate", parts: ["Catalytic converter", "Downstream O2 sensor", "Upstream O2 sensor"] },
  P0430: { desc: "Catalyst System Efficiency Below Threshold (Bank 2)", system: "Emissions",    severity: "moderate", parts: ["Catalytic converter (bank 2)", "O2 sensors"] },
  P0440: { desc: "Evaporative Emission Control System Malfunction",     system: "Emissions",    severity: "low",      parts: ["Gas cap", "EVAP purge valve", "EVAP canister"] },
  P0441: { desc: "EVAP Emission Control System Incorrect Purge Flow",   system: "Emissions",    severity: "low",      parts: ["EVAP purge solenoid", "Vacuum hoses"] },
  P0442: { desc: "EVAP Emission Control System Small Leak Detected",    system: "Emissions",    severity: "low",      parts: ["Gas cap", "EVAP hoses", "Charcoal canister"] },
  P0446: { desc: "EVAP Emission Control System Vent Control Circuit",   system: "Emissions",    severity: "low",      parts: ["EVAP vent valve", "Charcoal canister"] },
  P0455: { desc: "EVAP Emission Control System Large Leak Detected",    system: "Emissions",    severity: "low",      parts: ["Gas cap", "EVAP hoses/lines", "Charcoal canister"] },
  P0456: { desc: "EVAP Emission Control System Very Small Leak",        system: "Emissions",    severity: "low",      parts: ["Gas cap", "EVAP lines"] },
  P0500: { desc: "Vehicle Speed Sensor Malfunction",                    system: "Drivetrain",   severity: "moderate", parts: ["Vehicle speed sensor", "ABS wheel speed sensor"] },
  P0505: { desc: "Idle Air Control System Malfunction",                 system: "Fuel/Air",     severity: "moderate", parts: ["Idle air control valve", "Throttle body cleaning"] },
  P0507: { desc: "Idle Control System RPM High",                        system: "Fuel/Air",     severity: "moderate", parts: ["Idle air control valve", "Vacuum leak check"] },
  P0562: { desc: "System Voltage Low",                                  system: "Electrical",   severity: "high",     parts: ["Battery", "Alternator", "Battery cables"] },
  P0563: { desc: "System Voltage High",                                 system: "Electrical",   severity: "high",     parts: ["Voltage regulator", "Alternator"] },
  P0600: { desc: "Serial Communication Link Malfunction",               system: "PCM/ECU",      severity: "high",     parts: ["PCM/ECU", "Wiring harness — see dealer"] },
  P0700: { desc: "Transmission Control System Malfunction",             system: "Transmission", severity: "high",     parts: ["Transmission fluid", "Transmission solenoids", "TCM"] },
  P0715: { desc: "Input/Turbine Speed Sensor Circuit Malfunction",      system: "Transmission", severity: "high",     parts: ["Transmission input speed sensor"] },
  P0720: { desc: "Output Speed Sensor Circuit Malfunction",             system: "Transmission", severity: "high",     parts: ["Transmission output speed sensor"] },
  P0730: { desc: "Incorrect Gear Ratio",                                system: "Transmission", severity: "high",     parts: ["Transmission fluid", "Solenoid pack", "Valve body"] },
  P0740: { desc: "Torque Converter Clutch Circuit Malfunction",         system: "Transmission", severity: "high",     parts: ["TCC solenoid", "Transmission fluid"] },
  P0741: { desc: "Torque Converter Clutch Circuit Performance/Stuck Off", system: "Transmission", severity: "high",  parts: ["TCC solenoid", "Transmission fluid service"] },
};

// ─── Feature 3: Vehicle Quick-Specs ──────────────────────────────────────────
// Oil type, capacity, coolant, lug & drain torque by make/model/year range
const VEHICLE_SPECS = {
  Honda: {
    Civic: [
      { from: 1996, to: 2000, oil: "5W-30", capacity: "3.5 qt w/ filter", coolant: "Honda Type 2 (blue-green)", lug: "80 ft·lb", drain: "29 ft·lb", gap: "0.039–0.043 in" },
      { from: 2001, to: 2005, oil: "5W-20", capacity: "3.7 qt w/ filter", coolant: "Honda Type 2 (blue-green)", lug: "80 ft·lb", drain: "29 ft·lb", gap: "0.044 in" },
      { from: 2006, to: 2011, oil: "5W-20", capacity: "3.9 qt w/ filter", coolant: "Honda Type 2 (blue-green)", lug: "80 ft·lb", drain: "29 ft·lb", gap: "0.044 in" },
      { from: 2012, to: 2015, oil: "0W-20", capacity: "3.9 qt w/ filter", coolant: "Honda Type 2 (blue-green)", lug: "80 ft·lb", drain: "29 ft·lb", gap: "0.044 in" },
      { from: 2016, to: 2024, oil: "0W-20", capacity: "4.4 qt w/ filter", coolant: "Honda Type 2 or OAT",       lug: "80 ft·lb", drain: "29 ft·lb", gap: "0.044 in" },
    ],
    Accord: [
      { from: 1990, to: 2002, oil: "5W-30", capacity: "4.2 qt w/ filter", coolant: "Honda Type 2 (blue-green)", lug: "80 ft·lb", drain: "33 ft·lb", gap: "0.039–0.043 in" },
      { from: 2003, to: 2007, oil: "5W-20", capacity: "4.4 qt w/ filter", coolant: "Honda Type 2 (blue-green)", lug: "80 ft·lb", drain: "33 ft·lb", gap: "0.044 in" },
      { from: 2008, to: 2017, oil: "0W-20", capacity: "4.4 qt w/ filter", coolant: "Honda Type 2 (blue-green)", lug: "80 ft·lb", drain: "33 ft·lb", gap: "0.044 in" },
      { from: 2018, to: 2024, oil: "0W-20", capacity: "3.7 qt w/ filter", coolant: "Honda Type 2 or OAT",       lug: "80 ft·lb", drain: "29 ft·lb", gap: "N/A (no plugs 2.0T)" },
    ],
    "CR-V":  [{ from: 1997, to: 2024, oil: "0W-20", capacity: "4.2 qt w/ filter", coolant: "Honda Type 2 or OAT", lug: "80 ft·lb", drain: "29 ft·lb", gap: "0.044 in" }],
    Pilot:   [{ from: 2003, to: 2024, oil: "5W-20", capacity: "4.5 qt w/ filter", coolant: "Honda Type 2 or OAT", lug: "90 ft·lb", drain: "29 ft·lb", gap: "0.044 in" }],
    Odyssey: [{ from: 1999, to: 2024, oil: "5W-20", capacity: "4.5 qt w/ filter", coolant: "Honda Type 2 or OAT", lug: "80 ft·lb", drain: "29 ft·lb", gap: "0.044 in" }],
  },
  Toyota: {
    Camry: [
      { from: 1997, to: 2006, oil: "5W-30", capacity: "4.0 qt w/ filter", coolant: "Toyota Red (SLLC)", lug: "76 ft·lb", drain: "27 ft·lb", gap: "0.043 in" },
      { from: 2007, to: 2017, oil: "5W-30", capacity: "4.8 qt w/ filter", coolant: "Toyota Red (SLLC)", lug: "76 ft·lb", drain: "27 ft·lb", gap: "0.043 in" },
      { from: 2018, to: 2024, oil: "0W-20", capacity: "4.8 qt w/ filter", coolant: "Toyota Red (SLLC)", lug: "76 ft·lb", drain: "27 ft·lb", gap: "0.039–0.043 in" },
    ],
    Corolla: [
      { from: 1998, to: 2008, oil: "5W-30", capacity: "3.9 qt w/ filter", coolant: "Toyota Red (SLLC)", lug: "76 ft·lb", drain: "27 ft·lb", gap: "0.043 in" },
      { from: 2009, to: 2019, oil: "0W-20", capacity: "4.4 qt w/ filter", coolant: "Toyota Red (SLLC)", lug: "76 ft·lb", drain: "27 ft·lb", gap: "0.043 in" },
      { from: 2020, to: 2024, oil: "0W-16", capacity: "4.7 qt w/ filter", coolant: "Toyota Red (SLLC)", lug: "76 ft·lb", drain: "27 ft·lb", gap: "0.039 in" },
    ],
    RAV4:    [{ from: 1996, to: 2024, oil: "0W-20", capacity: "4.4 qt w/ filter", coolant: "Toyota Red (SLLC)", lug: "76 ft·lb", drain: "27 ft·lb", gap: "0.043 in" }],
    Tacoma:  [{ from: 1995, to: 2024, oil: "5W-30", capacity: "5.3 qt w/ filter", coolant: "Toyota Red (SLLC)", lug: "83 ft·lb", drain: "27 ft·lb", gap: "0.043 in" }],
    "4Runner": [{ from: 1990, to: 2024, oil: "5W-30", capacity: "5.5 qt w/ filter", coolant: "Toyota Red (SLLC)", lug: "83 ft·lb", drain: "27 ft·lb", gap: "0.043 in" }],
  },
  Ford: {
    "F-150": [
      { from: 1997, to: 2010, oil: "5W-20", capacity: "6.0 qt w/ filter", coolant: "Ford Yellow (VC-7-B)", lug: "150 ft·lb", drain: "15 ft·lb", gap: "0.052–0.056 in" },
      { from: 2011, to: 2024, oil: "5W-30", capacity: "6.0 qt w/ filter", coolant: "Ford Yellow (VC-7-B)", lug: "150 ft·lb", drain: "15 ft·lb", gap: "0.052–0.056 in" },
    ],
    Mustang: [{ from: 1994, to: 2024, oil: "5W-50", capacity: "8.0 qt w/ filter", coolant: "Ford Yellow (VC-7-B)", lug: "100 ft·lb", drain: "15 ft·lb", gap: "0.052–0.056 in" }],
    Explorer: [{ from: 1991, to: 2024, oil: "5W-20", capacity: "6.0 qt w/ filter", coolant: "Ford Yellow (VC-7-B)", lug: "100 ft·lb", drain: "15 ft·lb", gap: "0.052 in" }],
    Escape:   [{ from: 2001, to: 2024, oil: "5W-20", capacity: "4.5 qt w/ filter", coolant: "Ford Yellow (VC-7-B)", lug: "100 ft·lb", drain: "11 ft·lb", gap: "0.052 in" }],
    Focus:    [{ from: 2000, to: 2018, oil: "5W-20", capacity: "4.5 qt w/ filter", coolant: "Ford Yellow (VC-7-B)", lug: "100 ft·lb", drain: "11 ft·lb", gap: "0.052 in" }],
  },
  Chevrolet: {
    Silverado:  [{ from: 1999, to: 2024, oil: "5W-30", capacity: "6.0 qt w/ filter", coolant: "Dex-Cool (orange)", lug: "140 ft·lb", drain: "18 ft·lb", gap: "0.060 in" }],
    Malibu:     [{ from: 1997, to: 2024, oil: "5W-30", capacity: "4.2 qt w/ filter", coolant: "Dex-Cool (orange)", lug: "100 ft·lb", drain: "18 ft·lb", gap: "0.045 in" }],
    Equinox:    [{ from: 2005, to: 2024, oil: "5W-30", capacity: "5.0 qt w/ filter", coolant: "Dex-Cool (orange)", lug: "100 ft·lb", drain: "18 ft·lb", gap: "0.045 in" }],
    Camaro:     [{ from: 1993, to: 2024, oil: "5W-30", capacity: "6.0 qt w/ filter", coolant: "Dex-Cool (orange)", lug: "100 ft·lb", drain: "18 ft·lb", gap: "0.060 in" }],
    Traverse:   [{ from: 2009, to: 2024, oil: "5W-30", capacity: "5.5 qt w/ filter", coolant: "Dex-Cool (orange)", lug: "140 ft·lb", drain: "18 ft·lb", gap: "0.060 in" }],
  },
  Subaru: {
    Outback:   [{ from: 1995, to: 2024, oil: "5W-30", capacity: "4.7 qt w/ filter", coolant: "Subaru Super (blue)", lug: "89 ft·lb", drain: "33 ft·lb", gap: "0.028–0.031 in" }],
    Forester:  [{ from: 1998, to: 2024, oil: "5W-30", capacity: "4.7 qt w/ filter", coolant: "Subaru Super (blue)", lug: "89 ft·lb", drain: "33 ft·lb", gap: "0.028–0.031 in" }],
    Impreza:   [{ from: 1993, to: 2024, oil: "5W-30", capacity: "4.7 qt w/ filter", coolant: "Subaru Super (blue)", lug: "89 ft·lb", drain: "33 ft·lb", gap: "0.028–0.031 in" }],
    WRX:       [{ from: 2002, to: 2024, oil: "5W-30", capacity: "4.7 qt w/ filter", coolant: "Subaru Super (blue)", lug: "89 ft·lb", drain: "33 ft·lb", gap: "0.028–0.031 in" }],
    Crosstrek: [{ from: 2013, to: 2024, oil: "0W-20", capacity: "4.7 qt w/ filter", coolant: "Subaru Super (blue)", lug: "89 ft·lb", drain: "33 ft·lb", gap: "0.028–0.031 in" }],
  },
  Nissan: {
    Altima:    [{ from: 1993, to: 2024, oil: "5W-30", capacity: "4.3 qt w/ filter", coolant: "Nissan Blue (L248SP)", lug: "80 ft·lb", drain: "25 ft·lb", gap: "0.044 in" }],
    Rogue:     [{ from: 2008, to: 2024, oil: "5W-30", capacity: "4.7 qt w/ filter", coolant: "Nissan Blue (L248SP)", lug: "83 ft·lb", drain: "25 ft·lb", gap: "0.044 in" }],
    Sentra:    [{ from: 1995, to: 2024, oil: "5W-30", capacity: "3.5 qt w/ filter", coolant: "Nissan Blue (L248SP)", lug: "80 ft·lb", drain: "25 ft·lb", gap: "0.044 in" }],
    Frontier:  [{ from: 1998, to: 2024, oil: "5W-30", capacity: "5.5 qt w/ filter", coolant: "Nissan Blue (L248SP)", lug: "98 ft·lb", drain: "25 ft·lb", gap: "0.044 in" }],
    Pathfinder:[{ from: 1987, to: 2024, oil: "5W-30", capacity: "5.4 qt w/ filter", coolant: "Nissan Blue (L248SP)", lug: "98 ft·lb", drain: "25 ft·lb", gap: "0.044 in" }],
  },
  BMW: {
    "3 Series": [{ from: 1992, to: 2024, oil: "0W-30", capacity: "5.3 qt w/ filter", coolant: "BMW Blue (83192468442)", lug: "103 ft·lb", drain: "18 ft·lb", gap: "0.028 in" }],
    "5 Series": [{ from: 1989, to: 2024, oil: "0W-30", capacity: "6.9 qt w/ filter", coolant: "BMW Blue (83192468442)", lug: "103 ft·lb", drain: "18 ft·lb", gap: "0.028 in" }],
    X3:         [{ from: 2004, to: 2024, oil: "0W-30", capacity: "5.5 qt w/ filter", coolant: "BMW Blue (83192468442)", lug: "103 ft·lb", drain: "18 ft·lb", gap: "0.028 in" }],
    X5:         [{ from: 2000, to: 2024, oil: "0W-30", capacity: "6.9 qt w/ filter", coolant: "BMW Blue (83192468442)", lug: "103 ft·lb", drain: "18 ft·lb", gap: "0.028 in" }],
    M3:         [{ from: 1987, to: 2024, oil: "10W-60",capacity: "6.6 qt w/ filter", coolant: "BMW Blue (83192468442)", lug: "103 ft·lb", drain: "18 ft·lb", gap: "0.024 in" }],
  },
};

function getVehicleSpec(make, model, year) {
  const ranges = VEHICLE_SPECS[make]?.[model];
  if (!ranges) return null;
  const yr = Number(year);
  return ranges.find(r => yr >= r.from && yr <= r.to) || null;
}

function searchVehicles(query) {
  if (!query || query.trim().length < 2) return [];
  let q = query.toLowerCase().trim();

  // Detect transmission hint and strip it from the query
  let transHint = "";
  if (/\bcvt\b/.test(q)) transHint = "cvt";
  else if (/\bmanual\b|\bmt\b|\b[56]-?speed\b/.test(q)) transHint = "manual";
  else if (/\bauto(?:matic)?\b/.test(q)) transHint = "auto";
  q = q.replace(/\b(cvt|manual|automatic|auto|[56]-?speed|mt)\b/g, " ").replace(/\s{2,}/g, " ").trim();

  // Detect year — 4-digit first, then 2-digit shorthand (02 → 2002, 98 → 1998)
  let searchYear = null;
  const fourDigit = q.match(/\b(19[9]\d|20[012]\d)\b/);
  if (fourDigit) {
    searchYear = parseInt(fourDigit[0]);
    q = q.replace(fourDigit[0], "").trim();
  } else {
    const twoDigit = q.match(/\b(\d{2})\b/);
    if (twoDigit) {
      const n = parseInt(twoDigit[1]);
      searchYear = n >= 90 ? 1900 + n : 2000 + n;
      q = q.replace(twoDigit[0], "").trim();
    }
  }
  q = q.trim();

  const results = [];
  for (const [mk, mds] of Object.entries(VEHICLES)) {
    for (const md of mds) {
      const str = `${mk} ${md}`.toLowerCase();
      const hit = !q
        || str.includes(q)
        || q.includes(md.toLowerCase())   // e.g. "civic lx" includes "civic"
        || mk.toLowerCase().startsWith(q)
        || md.toLowerCase().startsWith(q)
        || md.toLowerCase().includes(q);
      if (!hit) continue;

      const ranges = TRIMS[mk]?.[md];
      const minY = ranges ? Math.min(...ranges.map(r => r.from)) : 1990;
      const maxY = ranges ? Math.max(...ranges.map(r => r.to)) : 2024;

      let resultYear;
      if (searchYear) {
        if (searchYear < minY || searchYear > maxY) continue;
        resultYear = searchYear;
      } else {
        resultYear = maxY;
      }

      // Match a trim from the remaining query text
      let trimHint = "";
      if (q) {
        const available = getTrims(mk, md, resultYear);
        trimHint = available.find(t => q.includes(t.toLowerCase())) || "";
      }

      // Validate transHint against what this vehicle actually offers
      const availTrans = getTransOptions(mk, md, resultYear);
      const validatedTrans = availTrans.includes(transHint) ? transHint : "";

      results.push({ year: resultYear, make: mk, model: md, trimHint, transHint: validatedTrans });
      if (results.length >= 8) break;
    }
    if (results.length >= 8) break;
  }
  return results;
}

// ─── Feature 4: Aftermarket Cross-Reference ───────────────────────────────────
// OEM part number → { brand, number, note }[]
const CROSS_REF = {
  // Honda oil filters
  "15400-PLM-A02": [{ brand: "Fram", number: "PH3600" }, { brand: "WIX", number: "51356" }, { brand: "Bosch", number: "3300" }],
  "15400-RTA-003": [{ brand: "Fram", number: "PH6607" }, { brand: "WIX", number: "57899" }, { brand: "Mobil 1", number: "M1-101" }],
  "15400-PCX-004": [{ brand: "Fram", number: "PH7317" }, { brand: "WIX", number: "57035" }],
  // Honda air filters
  "17220-PLM-A01": [{ brand: "Fram", number: "CA9720" }, { brand: "WIX", number: "46922" }, { brand: "K&N", number: "33-2078" }],
  "17220-RZA-Y00": [{ brand: "Fram", number: "CA9482" }, { brand: "WIX", number: "49206" }],
  // Honda spark plugs
  "98079-5514E":   [{ brand: "NGK", number: "ZFR5F-11" }, { brand: "Denso", number: "KJ20CR-L11" }],
  "12290-RBB-003": [{ brand: "NGK", number: "IZFR6K-11" }, { brand: "Denso", number: "SK20HR11" }],
  // Toyota oil filters
  "90915-YZZD3":   [{ brand: "Fram", number: "PH4386" }, { brand: "WIX", number: "57002" }, { brand: "Mobil 1", number: "M1-102A" }],
  "90915-YZZJ1":   [{ brand: "Fram", number: "PH7317" }, { brand: "WIX", number: "57035" }],
  // Toyota air filters
  "17801-0H050":   [{ brand: "Fram", number: "CA10175" }, { brand: "WIX", number: "49381" }],
};

// ─── Main App ────────────────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState("fitment");

  // Fitment state
  const [showVin, setShowVin] = useState(false);
  const [vin, setVin] = useState("");
  const [vinLoading, setVinLoading] = useState(false);
  const [vinError, setVinError] = useState("");
  const [vinSuccess, setVinSuccess] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");
  const [part, setPart] = useState("");
  const [transType, setTransType] = useState(""); // "" | "manual" | "auto"
  const [searched, setSearched] = useState(false);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [partData, setPartData] = useState(null);
  const [verificationCount, setVerificationCount] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);
  const [garageSource, setGarageSource] = useState(null); // vehicle obj if loaded from garage

  // Vehicle quick-search
  const [vehicleSearch, setVehicleSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  // Lookup state
  const [partNumberQuery, setPartNumberQuery] = useState("");
  const [partNumberResult, setPartNumberResult] = useState(null);
  const [partNumberSearched, setPartNumberSearched] = useState(false);
  const [lookupLoading, setLookupLoading] = useState(false);

  // Garage state
  const [garage, setGarage] = useState(loadGarage);
  const [addingCar, setAddingCar] = useState(false);
  const [garageForm, setGarageForm] = useState({
    year: "", make: "", model: "", trim: "", engine: "", nickname: "", notes: "", vin: "",
  });
  const [garageVin, setGarageVin] = useState("");
  const [garageVinLoading, setGarageVinLoading] = useState(false);
  const [garageVinError, setGarageVinError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);

  // Feature 1: Recalls
  const [recallsMap, setRecallsMap] = useState({}); // vehicleId → { loading, items }
  const [expandedRecallId, setExpandedRecallId] = useState(null);

  // Feature 2: DTC lookup
  const [lookupTab, setLookupTab] = useState("part"); // "part" | "dtc"
  const [dtcQuery, setDtcQuery] = useState("");
  const [dtcResult, setDtcResult] = useState(null);
  const [dtcSearched, setDtcSearched] = useState(false);

  // Feature 5: cost tracking (stored in maintenance log entries)
  const [logCost, setLogCost] = useState("");

  // Maintenance tracker state
  const [maintenanceData, setMaintenanceData] = useState(loadMaintenance);
  const [maintenanceVehicleId, setMaintenanceVehicleId] = useState(null);
  const [maintParts, setMaintParts] = useState({}); // part_type.toLowerCase() → part row from DB
  const [maintPartsLoading, setMaintPartsLoading] = useState(false);
  const [logServiceForm, setLogServiceForm] = useState(null); // { vehicleId, serviceKey, label }
  const [logMiles, setLogMiles] = useState("");
  const [logDate, setLogDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [logNotes, setLogNotes] = useState("");

  const makes = Object.keys(VEHICLES);
  const models = make ? VEHICLES[make] : [];
  const trims = (make && model && year) ? getTrims(make, model, year) : [];
  const canSearch = year && make && model && part;

  // Available trans types for current vehicle selection
  const availTrans = getTransOptions(make, model, year);

  // Filter PARTS: hide manual-only parts when auto/cvt is selected, and vice versa
  // CVT is treated like auto for parts purposes (similar axle seals, no manual internals)
  const visibleParts = PARTS.filter(p => {
    const pt = PARTS_TRANS[p];
    if (!pt) return true;
    if (!transType) return true;
    const effective = transType === "cvt" ? "auto" : transType;
    return pt === effective;
  });

  const garageModels = garageForm.make ? VEHICLES[garageForm.make] || [] : [];
  const garageTrims = (garageForm.make && garageForm.model && garageForm.year)
    ? getTrims(garageForm.make, garageForm.model, garageForm.year) : [];
  const canAddCar = garageForm.year && garageForm.make && garageForm.model;

  function updateGarage(list) { setGarage(list); persistGarage(list); }

  function switchTab(t) {
    setTab(t);
    setSearched(false);
    setPartNumberSearched(false);
    setVerified(false);
    setTransType("");
    if (t !== "fitment") setGarageSource(null);
  }

  // ── VIN lookup (fitment tab) ──
  async function handleVinLookup() {
    if (vin.length !== 17) { setVinError("VIN must be exactly 17 characters."); return; }
    setVinLoading(true); setVinError(""); setVinSuccess("");
    try {
      const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin.trim()}?format=json`);
      const data = await res.json();
      const results = data.Results;
      const get = (v) => results.find((r) => r.Variable === v)?.Value || "";
      const decodedYear = get("Model Year"), decodedMake = get("Make"), decodedModel = get("Model"), decodedTrim = get("Trim");
      if (!decodedYear || !decodedMake || !decodedModel) {
        setVinError("Couldn't decode this VIN. Please check it and try again."); setVinLoading(false); return;
      }
      const fmtMake = decodedMake.charAt(0).toUpperCase() + decodedMake.slice(1).toLowerCase();
      const matchedMake = Object.keys(VEHICLES).find((m) => m.toLowerCase() === fmtMake.toLowerCase());
      const matchedModel = matchedMake ? VEHICLES[matchedMake].find((m) => m.toLowerCase() === decodedModel.toLowerCase()) : null;
      setYear(decodedYear); setMake(matchedMake || ""); setModel(matchedModel || ""); setTrim(decodedTrim || "");
      setVinSuccess(`Found: ${decodedYear} ${decodedMake} ${decodedModel}${decodedTrim ? " " + decodedTrim : ""}`);
      setShowVin(false); setVin("");
    } catch { setVinError("Something went wrong. Check your connection and try again."); }
    setVinLoading(false);
  }

  // ── VIN lookup (garage add form) ──
  async function handleGarageVinLookup() {
    if (garageVin.length !== 17) { setGarageVinError("VIN must be exactly 17 characters."); return; }
    setGarageVinLoading(true); setGarageVinError("");
    try {
      const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${garageVin.trim()}?format=json`);
      const data = await res.json();
      const results = data.Results;
      const get = (v) => results.find((r) => r.Variable === v)?.Value || "";
      const decodedYear = get("Model Year"), decodedMake = get("Make"), decodedModel = get("Model"), decodedTrim = get("Trim");
      if (!decodedYear || !decodedMake || !decodedModel) {
        setGarageVinError("Couldn't decode this VIN."); setGarageVinLoading(false); return;
      }
      const fmtMake = decodedMake.charAt(0).toUpperCase() + decodedMake.slice(1).toLowerCase();
      const matchedMake = Object.keys(VEHICLES).find((m) => m.toLowerCase() === fmtMake.toLowerCase());
      const matchedModel = matchedMake ? VEHICLES[matchedMake].find((m) => m.toLowerCase() === decodedModel.toLowerCase()) : null;
      const engineStr = buildEngineString(results);
      setGarageForm((f) => ({
        ...f,
        year: decodedYear,
        make: matchedMake || decodedMake,
        model: matchedModel || decodedModel,
        trim: decodedTrim || "",
        engine: engineStr,
        vin: garageVin.trim(),
      }));
      setGarageVin("");
    } catch { setGarageVinError("Something went wrong. Check your connection and try again."); }
    setGarageVinLoading(false);
  }

  async function handleSearch() {
    if (!canSearch) return;
    setLoading(true); setSearched(false); setPartData(null); setVerified(false); setVerificationCount(0);

    let query = supabase.from("Parts").select("*")
      .eq("year", year).eq("make", make).eq("model", model).ilike("part_type", part);

    // Filter by engine based on trim (e.g. Civic Si → K20, not D17)
    const engineHint = TRIM_ENGINE_MAP[`${make}|${model}|${trim}`];
    if (engineHint) query = query.ilike("engine", `%${engineHint}%`);

    // Filter by transmission type for trans-specific parts
    const partTrans = PARTS_TRANS[part];
    if (partTrans) {
      const keyword = partTrans === "manual" ? "%Manual%" : "%Auto%";
      query = query.ilike("engine", keyword);
    }

    const verificationQuery = supabase.from("verifications").select("*", { count: "exact", head: true })
      .eq("year", year).eq("make", make).eq("model", model).eq("part", part).eq("result", "confirmed");

    const [{ data, error }, { count }] = await Promise.all([query.limit(1), verificationQuery]);
    setLoading(false); setSearched(true);
    setPartData(!error && data?.length > 0 ? data[0] : null);
    setVerificationCount(count || 0);
  }

  function handleReset() {
    setYear(""); setMake(""); setModel(""); setTrim(""); setPart(""); setTransType("");
    setSearched(false); setVerified(false); setPartData(null); setVerificationCount(0); setVinSuccess(""); setGarageSource(null);
  }

  async function handleVerify(result) {
    const { error } = await supabase.from("verifications").insert([{ year, make, model, part, result }]);
    if (error) alert("Something went wrong, try again.");
    else setVerified(true);
  }

  async function handlePartNumberLookup() {
    if (!partNumberQuery.trim()) return;
    setLookupLoading(true); setPartNumberResult(null); setPartNumberSearched(false);
    const { data, error } = await supabase.from("Parts").select("*").ilike("part_number", partNumberQuery.trim()).limit(1);
    setLookupLoading(false); setPartNumberSearched(true);
    setPartNumberResult(!error && data?.length > 0 ? data[0] : null);
  }

  function addCarToGarage() {
    if (!canAddCar) return;
    const vehicle = { id: Date.now().toString(), ...garageForm, addedAt: new Date().toISOString() };
    updateGarage([...garage, vehicle]);
    setAddingCar(false);
    setGarageForm({ year: "", make: "", model: "", trim: "", engine: "", nickname: "", notes: "", vin: "" });
    setGarageVin(""); setGarageVinError("");
  }

  function removeFromGarage(id) {
    updateGarage(garage.filter((v) => v.id !== id));
    setConfirmDelete(null);
  }

  function findPartsForVehicle(vehicle) {
    setYear(vehicle.year); setMake(vehicle.make); setModel(vehicle.model); setTrim(vehicle.trim || "");
    setPart(""); setSearched(false); setPartData(null); setVerified(false); setVinSuccess("");
    setGarageSource(vehicle);
    setTab("fitment");
  }

  useEffect(() => {
    function onResize() { setIsMobile(window.innerWidth < 480); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []); // eslint-disable-line

  // ── Feature 1: Recall fetch ───────────────────────────────────────────────
  // Reset transType if it's not valid for the newly selected vehicle
  useEffect(() => {
    if (!transType || !make || !model || !year) return;
    const avail = getTransOptions(make, model, year);
    if (!avail.includes(transType)) setTransType("");
  }, [make, model, year]); // eslint-disable-line

  // Auto-fill transmission when trim uniquely determines it
  useEffect(() => {
    if (!trim || !make || !model) return;
    const locked = TRIM_TRANS_MAP[`${make}|${model}|${trim}`];
    if (locked) setTransType(locked);
  }, [trim, make, model]); // eslint-disable-line

  useEffect(() => {
    if (tab !== "garage" || garage.length === 0) return;
    garage.forEach(v => {
      if (recallsMap[v.id]) return; // already fetched
      setRecallsMap(m => ({ ...m, [v.id]: { loading: true, items: [] } }));
      fetchNhtsaRecalls(v.make, v.model, v.year).then(items => {
        setRecallsMap(m => ({ ...m, [v.id]: { loading: false, items } }));
      });
    });
  }, [tab, garage]); // eslint-disable-line

  // ── Feature 2: DTC lookup ─────────────────────────────────────────────────
  function handleDtcLookup() {
    const code = dtcQuery.trim().toUpperCase();
    setDtcSearched(true);
    setDtcResult(DTC_CODES[code] ? { code, ...DTC_CODES[code] } : null);
  }

  // ── Maintenance helpers ───────────────────────────────────────────────────
  function updateMaintenance(data) { setMaintenanceData(data); persistMaintenance(data); }

  function getVM(vehicleId) {
    return maintenanceData[vehicleId] || { currentMiles: "", services: {} };
  }

  function setVehicleCurrentMiles(vehicleId, miles) {
    const m = { ...maintenanceData, [vehicleId]: { ...getVM(vehicleId), currentMiles: miles } };
    updateMaintenance(m);
  }

  function getLastEntry(vehicleId, serviceKey) {
    const entries = maintenanceData[vehicleId]?.services?.[serviceKey]?.entries || [];
    return entries.length > 0 ? entries[entries.length - 1] : null;
  }

  function getServiceStatus(lastEntry, schedule, currentMiles) {
    if (!schedule) return "chain";
    if (!lastEntry) return "never";
    const curMi = Number(currentMiles) || 0;
    const milesSince = curMi && lastEntry.miles ? curMi - lastEntry.miles : null;
    const monthsSince = lastEntry.date
      ? (Date.now() - new Date(lastEntry.date).getTime()) / (1000 * 60 * 60 * 24 * 30.44)
      : null;
    const pct = Math.max(
      milesSince !== null ? milesSince / schedule.miles : 0,
      monthsSince !== null ? monthsSince / schedule.months : 0
    );
    if (pct >= 1) return "overdue";
    if (pct >= 0.8) return "soon";
    return "ok";
  }

  function getNextDueText(lastEntry, schedule) {
    if (!schedule || !lastEntry) return null;
    const parts = [];
    if (lastEntry.miles) parts.push(`${(lastEntry.miles + schedule.miles).toLocaleString()} mi`);
    if (lastEntry.date) {
      const d = new Date(new Date(lastEntry.date).getTime() + schedule.months * 30.44 * 24 * 3600 * 1000);
      parts.push(d.toLocaleDateString("en-US", { month: "short", year: "numeric" }));
    }
    return parts.length ? `Next: ${parts.join(" · ")}` : null;
  }

  async function fetchMaintParts(vehicle) {
    setMaintParts({});
    setMaintPartsLoading(true);
    const { data } = await supabase.from("Parts").select("*")
      .eq("year", vehicle.year).eq("make", vehicle.make).eq("model", vehicle.model);
    const lookup = {};
    (data || []).forEach(p => {
      const key = p.part_type?.toLowerCase().trim();
      if (key && !lookup[key]) lookup[key] = p;
    });
    setMaintParts(lookup);
    setMaintPartsLoading(false);
  }

  function openLogForm(vehicleId, serviceKey, label) {
    const vm = getVM(vehicleId);
    setLogServiceForm({ vehicleId, serviceKey, label });
    setLogMiles(vm.currentMiles || "");
    setLogDate(new Date().toISOString().slice(0, 10));
    setLogNotes("");
  }

  function saveLoggedService() {
    if (!logServiceForm) return;
    const { vehicleId, serviceKey } = logServiceForm;
    const entry = { miles: Number(logMiles) || 0, date: logDate, notes: logNotes, cost: Number(logCost) || 0, at: new Date().toISOString() };
    const m = { ...maintenanceData };
    const vm = { ...getVM(vehicleId), services: { ...getVM(vehicleId).services } };
    vm.services[serviceKey] = { entries: [...(vm.services[serviceKey]?.entries || []), entry] };
    if (entry.miles && (!vm.currentMiles || entry.miles > Number(vm.currentMiles))) {
      vm.currentMiles = String(entry.miles);
    }
    m[vehicleId] = vm;
    updateMaintenance(m);
    setLogServiceForm(null);
    setLogCost("");
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div style={s.page}>
      {/* Header */}
      <header style={s.header}>
        <div style={s.headerInner}>
          <div style={s.logo}>
            <span style={s.logoText}>PartsFit</span>
          </div>
          <p style={s.tagline}>OEM part numbers for every car</p>
        </div>
      </header>

      <main style={s.main}>

        {/* ══ FITMENT TAB ══ */}
        {tab === "fitment" && (
          <>
            {!searched && !loading && (
              <div style={s.card}>
                {/* Garage source banner */}
                {garageSource && (
                  <div style={s.garageSourceBanner}>
                    <span>From your garage: <strong>{garageSource.nickname || `${garageSource.year} ${garageSource.make} ${garageSource.model}`}</strong></span>
                    <button style={s.garageSourceClear} onClick={() => setGarageSource(null)}>✕</button>
                  </div>
                )}

                <div style={s.cardHeader}>
                  <h2 style={s.cardTitle}>Your vehicle</h2>
                  {!showVin && (
                    <button style={s.vinToggle} onClick={() => { setShowVin(true); setVinSuccess(""); }}>
                      Use VIN instead
                    </button>
                  )}
                </div>

                {/* Quick vehicle search */}
                <div style={s.vsWrap}>
                  <div style={s.vsInputRow}>
                    <input
                      style={s.vsInput}
                      type="text"
                      placeholder="Quick search — e.g. &quot;2002 Honda Civic&quot; or &quot;Tacoma&quot;"
                      value={vehicleSearch}
                      onChange={e => setVehicleSearch(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
                      autoComplete="off"
                    />
                    {vehicleSearch && (
                      <button style={s.vsClear} onClick={() => setVehicleSearch("")}>✕</button>
                    )}
                  </div>
                  {searchFocused && vehicleSearch.trim().length >= 2 && (() => {
                    const results = searchVehicles(vehicleSearch);
                    if (!results.length) return (
                      <div style={s.vsDropdown}>
                        <p style={s.vsNoResult}>No match — try "2019 Camry" or "F-150"</p>
                      </div>
                    );
                    return (
                      <div style={s.vsDropdown}>
                        {results.map((r, i) => (
                          <button
                            key={i}
                            style={s.vsItem}
                            onMouseDown={() => {
                              setYear(String(r.year));
                              setMake(r.make);
                              setModel(r.model);
                              setTrim(r.trimHint || "");
                              const lockedTrans = r.trimHint
                                ? TRIM_TRANS_MAP[`${r.make}|${r.model}|${r.trimHint}`]
                                : null;
                              if (lockedTrans) setTransType(lockedTrans);
                              else if (r.transHint) setTransType(r.transHint);
                              setVehicleSearch("");
                              setSearchFocused(false);
                            }}
                          >
                            <img
                              src={BRAND_LOGOS[r.make]}
                              alt={r.make}
                              style={s.vsItemLogo}
                              onError={e => { e.target.style.display = "none"; }}
                            />
                            <div style={s.vsItemText}>
                              <span style={s.vsItemVehicle}>{r.make} {r.model}{r.trimHint ? <span style={s.vsItemTrim}> · {r.trimHint}</span> : ""}</span>
                              <span style={s.vsItemMeta}>{r.year}{r.transHint ? <span style={s.vsItemTransTag}> · {r.transHint.toUpperCase()}</span> : ""}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    );
                  })()}
                </div>

                {vinSuccess && (
                  <div style={s.successBanner}>
                    <span>{vinSuccess} — fields filled in below</span>
                  </div>
                )}

                {showVin && (
                  <div style={s.vinBox}>
                    <label style={s.label}>Enter your VIN</label>
                    <p style={s.hint}>17 characters — found on your dashboard, door jamb, or registration</p>
                    <div style={s.vinRow}>
                      <input
                        style={{ ...s.input, flex: 1, textTransform: "uppercase", letterSpacing: "0.08em" }}
                        type="text" maxLength={17} placeholder="e.g. 1HGCM82633A123456"
                        value={vin}
                        onChange={e => { setVin(e.target.value.toUpperCase()); setVinError(""); }}
                        onKeyDown={e => e.key === "Enter" && handleVinLookup()}
                      />
                      <button style={s.vinBtn} onClick={handleVinLookup} disabled={vinLoading}>
                        {vinLoading ? "Looking up…" : "Look up"}
                      </button>
                    </div>
                    {vinError && <p style={s.errorText}>{vinError}</p>}
                    <button style={s.linkBtn} onClick={() => { setShowVin(false); setVinError(""); }}>Cancel</button>
                  </div>
                )}

                <div style={{ ...s.row3, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr" }}>
                  <div style={s.field}>
                    <label style={s.label}>Year</label>
                    <select style={s.select} value={year} onChange={e => setYear(e.target.value)}>
                      <option value="">Select year</option>
                      {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                  <div style={s.field}>
                    <label style={s.label}>Make</label>
                    <select style={s.select} value={make} onChange={e => { setMake(e.target.value); setModel(""); setTrim(""); }}>
                      <option value="">Select make</option>
                      {makes.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <div style={s.field}>
                    <label style={s.label}>Model</label>
                    <select style={s.select} value={model} onChange={e => { setModel(e.target.value); setTrim(""); }} disabled={!make}>
                      <option value="">Select model</option>
                      {models.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                </div>

                <div style={s.row2}>
                  <div style={s.field}>
                    <label style={s.label}>Trim <span style={s.optional}>(optional)</span></label>
                    <select style={s.select} value={trim} onChange={e => {
                      const t = e.target.value;
                      setTrim(t);
                      const lockedTrans = t ? TRIM_TRANS_MAP[`${make}|${model}|${t}`] : null;
                      if (lockedTrans) setTransType(lockedTrans);
                    }} disabled={!model || trims.length === 0}>
                      <option value="">{trims.length === 0 ? "Select model first" : "Select trim"}</option>
                      {trims.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div style={s.field}>
                    <label style={s.label}>Transmission <span style={s.optional}>(optional)</span></label>
                    <div style={s.transToggle}>
                      {[["", "Any"], ["manual", "Manual"], ["auto", "Auto"], ["cvt", "CVT"]].filter(([val]) =>
                        !val || availTrans.includes(val)
                      ).map(([val, label]) => (
                        <button
                          key={val}
                          style={{ ...s.transBtn, ...(transType === val ? s.transBtnActive : {}) }}
                          onClick={() => {
                            setTransType(val);
                            const eff = val === "cvt" ? "auto" : val;
                            if (part && PARTS_TRANS[part] && PARTS_TRANS[part] !== eff && val !== "") setPart("");
                          }}
                        >{label}</button>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={s.field}>
                  <label style={s.label}>Part needed</label>
                  <select style={s.select} value={part} onChange={e => setPart(e.target.value)}>
                    <option value="">Select part type</option>
                    {visibleParts.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <button
                  style={{ ...s.primaryBtn, opacity: canSearch ? 1 : 0.45, cursor: canSearch ? "pointer" : "not-allowed" }}
                  onClick={handleSearch} disabled={!canSearch}
                >
                  Check fitment
                </button>
              </div>
            )}

            {loading && (
              <div style={{ ...s.card, ...s.centerCard }}>
                <div style={s.spinner} />
                <p style={s.loadingText}>Looking up parts…</p>
              </div>
            )}

            {searched && (
              <div style={{ paddingBottom: "80px" }}>
                {partData ? (
                  <div style={{ ...s.card, ...s.resultCard }}>
                    {verificationCount > 0 && (
                      <div style={s.confirmedBanner}>✓ Confirmed by {verificationCount} driver{verificationCount !== 1 ? "s" : ""} who own a {year} {make} {model}</div>
                    )}
                    <div style={s.fitBadge}><span>✓</span> Match found for your {year} {make} {model}</div>
                    <div style={s.partNumberHero}>
                      <p style={s.partNumberLabel}>OEM Part Number</p>
                      <p style={s.partNumberValue}>{partData.part_number}</p>
                      <p style={s.partNumberBrand}>{partData.brand}</p>
                    </div>
                    <div style={s.infoGrid}>
                      <div style={s.infoCell}><p style={s.infoCellLabel}>Part type</p><p style={s.infoCellValue}>{partData.part_type}</p></div>
                      <div style={s.infoCell}><p style={s.infoCellLabel}>Engine</p><p style={s.infoCellValue}>{partData.engine}</p></div>
                    </div>
                    {partData.notes && (
                      <div style={s.noteBanner}><span style={s.noteText}>{partData.notes}</span></div>
                    )}

                    {/* Retailer buy links */}
                    <div style={s.buyLinks}>
                      <p style={s.buyLinksTitle}>Buy this part</p>
                      <div style={s.buyLinksList}>
                        {[
                          { name: "AutoZone", domain: "autozone.com", url: `https://www.autozone.com/searchresult?searchText=${encodeURIComponent(partData.part_number)}` },
                          { name: "O'Reilly Auto Parts", domain: "oreillyauto.com", url: `https://www.oreillyauto.com/shop/b?q=${encodeURIComponent(partData.part_number)}` },
                          { name: "Amazon", domain: "amazon.com", url: `https://www.amazon.com/s?k=${encodeURIComponent(partData.part_number)}` },
                        ].map(({ name, domain, url }) => (
                          <a key={name} href={url} target="_blank" rel="noopener noreferrer" style={s.buyLink}>
                            <div style={s.buyLinkLeft}>
                              <img
                                src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
                                alt={name}
                                style={s.buyLinkLogo}
                                onError={e => { e.target.style.display = "none"; }}
                              />
                              <span style={s.buyLinkName}>{name}</span>
                            </div>
                            <div style={s.buyLinkRight}>
                              <span style={s.buyLinkPN}>{partData.part_number}</span>
                              <span style={s.buyLinkArrow}>→</span>
                            </div>
                          </a>
                        ))}
                      </div>
                      {/* Feature 4: Cross-reference on fitment result */}
                      {CROSS_REF[partData.part_number] && (
                        <div style={s.crossRefSection}>
                          <p style={s.crossRefTitle}>Aftermarket equivalents</p>
                          <div style={s.crossRefList}>
                            {CROSS_REF[partData.part_number].map(r => (
                              <span key={r.number} style={s.crossRefBadge}>{r.brand} <strong>{r.number}</strong></span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div style={{ ...s.card, ...s.noResultCard }}>
                    <p style={s.noResultTitle}>No data for this combination yet</p>
                    <p style={s.noResultBody}>We don't have a confirmed part number for a {year} {make} {model} {part.toLowerCase()} yet.</p>
                  </div>
                )}

                {!verified ? (
                  <div style={s.card}>
                    <h3 style={s.verifyTitle}>Did this part actually work?</h3>
                    <p style={s.verifySubtitle}>Help the next person — takes 2 seconds.</p>
                    <div style={s.verifyRow}>
                      <button style={{ ...s.verifyBtn, ...s.verifyYes }} onClick={() => handleVerify("confirmed")}>Confirmed fit</button>
                      <button style={{ ...s.verifyBtn, ...s.verifyNo }} onClick={() => handleVerify("didnt_fit")}>Didn't fit</button>
                      <button style={{ ...s.verifyBtn, ...s.verifyMaybe }} onClick={() => handleVerify("fit_with_mods")}>Fit with mods</button>
                    </div>
                  </div>
                ) : (
                  <div style={{ ...s.card, ...s.centerCard }}>
                    <p style={s.thankTitle}>Thanks for confirming!</p>
                    <p style={s.thankBody}>You just helped the next person.</p>
                  </div>
                )}
                <div style={s.stickySearchBar}>
                  <button style={s.stickySearchBtn} onClick={handleReset}>← Search another part</button>
                </div>
              </div>
            )}
          </>
        )}

        {/* ══ LOOKUP TAB ══ */}
        {tab === "lookup" && (
          <>
            {/* Toggle: Part # vs Fault Code */}
            <div style={s.lookupToggle}>
              <button style={{ ...s.lookupToggleBtn, ...(lookupTab === "part" ? s.lookupToggleBtnActive : {}) }} onClick={() => { setLookupTab("part"); setDtcSearched(false); setDtcQuery(""); }}>Part #</button>
              <button style={{ ...s.lookupToggleBtn, ...(lookupTab === "dtc"  ? s.lookupToggleBtnActive : {}) }} onClick={() => { setLookupTab("dtc");  setPartNumberSearched(false); setPartNumberQuery(""); }}>Fault Code</button>
            </div>

            {/* ── Part number mode ── */}
            {lookupTab === "part" && <>
            {!partNumberSearched && !lookupLoading && (
              <div style={s.card}>
                <h2 style={s.cardTitle}>Part number lookup</h2>
                <p style={s.cardSubtitle}>Have a part number but not sure what it fits? Enter it below.</p>
                <div style={s.field}>
                  <label style={s.label}>Part number</label>
                  <input
                    style={{ ...s.input, letterSpacing: "0.05em" }}
                    type="text" placeholder="e.g. 15400-PLM-A02"
                    value={partNumberQuery}
                    onChange={e => setPartNumberQuery(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handlePartNumberLookup()}
                  />
                </div>
                <button
                  style={{ ...s.primaryBtn, opacity: partNumberQuery.trim() ? 1 : 0.45, cursor: partNumberQuery.trim() ? "pointer" : "not-allowed" }}
                  onClick={handlePartNumberLookup} disabled={!partNumberQuery.trim()}
                >Look up</button>
              </div>
            )}
            {lookupLoading && (
              <div style={{ ...s.card, ...s.centerCard }}><div style={s.spinner} /><p style={s.loadingText}>Looking up part number…</p></div>
            )}
            {partNumberSearched && !lookupLoading && (
              <div>
                {partNumberResult ? (
                  <div style={{ ...s.card, ...s.resultCard }}>
                    <div style={s.fitBadge}><span>✓</span> Part found!</div>
                    <div style={s.partNumberHero}>
                      <p style={s.partNumberLabel}>OEM Part Number</p>
                      <p style={s.partNumberValue}>{partNumberResult.part_number}</p>
                      <p style={s.partNumberBrand}>{partNumberResult.brand}</p>
                    </div>
                    <div style={s.infoGrid}>
                      <div style={s.infoCell}><p style={s.infoCellLabel}>Part type</p><p style={s.infoCellValue}>{partNumberResult.part_type}</p></div>
                      <div style={s.infoCell}><p style={s.infoCellLabel}>Fits</p><p style={s.infoCellValue}>{partNumberResult.year} {partNumberResult.make} {partNumberResult.model}{partNumberResult.trim ? ` ${partNumberResult.trim}` : ""}</p></div>
                    </div>
                    {partNumberResult.notes && (
                      <div style={s.noteBanner}><span style={s.noteText}>{partNumberResult.notes}</span></div>
                    )}
                    {/* Feature 4: Cross-reference */}
                    {CROSS_REF[partNumberResult.part_number] && (
                      <div style={s.crossRefSection}>
                        <p style={s.crossRefTitle}>Aftermarket equivalents</p>
                        <div style={s.crossRefList}>
                          {CROSS_REF[partNumberResult.part_number].map(r => (
                            <span key={r.number} style={s.crossRefBadge}>{r.brand} <strong>{r.number}</strong></span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ ...s.card, ...s.noResultCard }}>
                    <p style={s.noResultTitle}>Part number not found</p>
                    <p style={s.noResultBody}>We don't have <strong>{partNumberQuery}</strong> in our database yet.</p>
                  </div>
                )}
                <button style={s.backBtn} onClick={() => { setPartNumberSearched(false); setPartNumberQuery(""); }}>← Look up another part</button>
              </div>
            )}
            </>}

            {/* ── DTC fault code mode ── */}
            {lookupTab === "dtc" && <>
            {!dtcSearched && (
              <div style={s.card}>
                <h2 style={s.cardTitle}>Fault code lookup</h2>
                <p style={s.cardSubtitle}>Enter your OBD-II code to see what it means and which parts to check.</p>
                <div style={s.field}>
                  <label style={s.label}>Fault code</label>
                  <input
                    style={{ ...s.input, letterSpacing: "0.1em", textTransform: "uppercase" }}
                    type="text" placeholder="e.g. P0300"
                    value={dtcQuery}
                    onChange={e => setDtcQuery(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleDtcLookup()}
                    maxLength={6}
                  />
                </div>
                <button
                  style={{ ...s.primaryBtn, opacity: dtcQuery.trim() ? 1 : 0.45, cursor: dtcQuery.trim() ? "pointer" : "not-allowed" }}
                  onClick={handleDtcLookup} disabled={!dtcQuery.trim()}
                >Look up code</button>
              </div>
            )}
            {dtcSearched && (
              <div>
                {dtcResult ? (() => {
                  const sev = { low: { bg: "#fffbeb", color: "#b45309", dot: "#f59e0b", label: "Non-urgent" }, moderate: { bg: "#fff7ed", color: "#c2410c", dot: "#f97316", label: "Address soon" }, high: { bg: "#fef2f2", color: "#dc2626", dot: "#ef4444", label: "Fix promptly" } }[dtcResult.severity];
                  return (
                    <div style={{ ...s.card, ...s.resultCard }}>
                      <div style={s.fitBadge}><span>✓</span> Code found</div>
                      <div style={s.partNumberHero}>
                        <p style={s.partNumberLabel}>Fault Code</p>
                        <p style={s.partNumberValue}>{dtcResult.code}</p>
                        <p style={s.partNumberBrand}>{dtcResult.system}</p>
                      </div>
                      <div style={s.noteBanner}>
                        <span style={s.noteText}>{dtcResult.desc}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", margin: "12px 0 8px" }}>
                        <span style={{ ...s.statusBadge, backgroundColor: sev.bg, color: sev.color }}>
                          <span style={{ ...s.statusDot, backgroundColor: sev.dot }} />{sev.label}
                        </span>
                      </div>
                      <p style={{ ...s.infoCellLabel, marginBottom: "8px" }}>Parts to check</p>
                      <div style={s.dtcPartsList}>
                        {dtcResult.parts.map(p => (
                          <div key={p} style={s.dtcPartItem}>
                            <span style={s.dtcPartBullet}>→</span>
                            <span style={s.dtcPartName}>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })() : (
                  <div style={{ ...s.card, ...s.noResultCard }}>
                    <p style={s.noResultTitle}>Code not in our database</p>
                    <p style={s.noResultBody}><strong>{dtcQuery.toUpperCase()}</strong> may be a manufacturer-specific code. Check your vehicle's service manual or a dealer scanner.</p>
                  </div>
                )}
                <button style={s.backBtn} onClick={() => { setDtcSearched(false); setDtcQuery(""); }}>← Look up another code</button>
              </div>
            )}
            </>}
          </>
        )}

        {/* ══ GARAGE TAB ══ */}
        {tab === "garage" && (
          <>
            {/* ── Maintenance view (drill-down) ── */}
            {maintenanceVehicleId && (() => {
              const vehicle = garage.find(v => v.id === maintenanceVehicleId);
              if (!vehicle) return null;
              const schedule = MAINTENANCE_SCHEDULES[vehicle.make] || DEFAULT_SCHEDULE;
              const vm = getVM(vehicle.id);
              const STATUS = {
                ok:      { label: "OK",         bg: "#f0fdf4", color: "#15803d", dot: "#22c55e" },
                soon:    { label: "Due soon",   bg: "#fffbeb", color: "#b45309", dot: "#f59e0b" },
                overdue: { label: "Overdue",    bg: "#fef2f2", color: "#dc2626", dot: "#ef4444" },
                never:   { label: "No record",  bg: "#f8fafc", color: "#64748b", dot: "#94a3b8" },
                chain:   { label: "Chain — N/A",bg: "#f8fafc", color: "#94a3b8", dot: "#cbd5e1" },
              };
              return (
                <>
                  <button style={s.backBtn} onClick={() => setMaintenanceVehicleId(null)}>← Back to garage</button>
                  <div style={s.maintHeader}>
                    <div style={{ ...s.garageCardAccent, width: "4px", borderRadius: "4px", backgroundColor: MAKE_COLORS[vehicle.make] || "#64748b", flexShrink: 0 }} />
                    <div>
                      <p style={s.maintVehicleName}>{vehicle.year} {vehicle.make} {vehicle.model}{vehicle.trim ? ` · ${vehicle.trim}` : ""}</p>
                      <p style={s.maintSubtitle}>Maintenance Tracker · {vehicle.make} factory intervals</p>
                    </div>
                  </div>

                  {/* Current mileage + cost total */}
                  <div style={s.card}>
                    <div style={s.row2}>
                      <div style={s.field}>
                        <label style={s.label}>Current mileage</label>
                        <div style={s.milesRow}>
                          <input style={{ ...s.input, flex: 1 }} type="number" placeholder="e.g. 95000" value={vm.currentMiles || ""} onChange={e => setVehicleCurrentMiles(vehicle.id, e.target.value)} />
                          <span style={s.milesUnit}>mi</span>
                        </div>
                      </div>
                      <div style={s.field}>
                        <label style={s.label}>Total spent</label>
                        <div style={s.milesRow}>
                          <span style={{ ...s.milesUnit, color: "#15803d", fontWeight: "700", fontSize: "18px" }}>
                            ${Object.values(vm.services || {}).flatMap(svc => (svc.entries || []).map(e => e.cost || 0)).reduce((a, b) => a + b, 0).toFixed(0)}
                          </span>
                        </div>
                        <p style={s.hint}>logged maintenance costs</p>
                      </div>
                    </div>
                  </div>

                  {/* Feature 3: Vehicle quick-specs */}
                  {(() => {
                    const spec = getVehicleSpec(vehicle.make, vehicle.model, vehicle.year);
                    if (!spec) return null;
                    return (
                      <div style={s.card}>
                        <p style={{ fontSize: "11px", fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px" }}>Quick Specs · {vehicle.year} {vehicle.make} {vehicle.model}</p>
                        <div style={s.specsGrid}>
                          <div style={s.specItem}><span style={s.specLabel}>Oil type</span><span style={s.specValue}>{spec.oil}</span></div>
                          <div style={s.specItem}><span style={s.specLabel}>Capacity</span><span style={s.specValue}>{spec.capacity}</span></div>
                          <div style={s.specItem}><span style={s.specLabel}>Coolant</span><span style={s.specValue}>{spec.coolant}</span></div>
                          <div style={s.specItem}><span style={s.specLabel}>Spark gap</span><span style={s.specValue}>{spec.gap}</span></div>
                          <div style={s.specItem}><span style={s.specLabel}>Lug nuts</span><span style={s.specValue}>{spec.lug}</span></div>
                          <div style={s.specItem}><span style={s.specLabel}>Drain plug</span><span style={s.specValue}>{spec.drain}</span></div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Maintenance items */}
                  <div style={s.card}>
                    {MAINTENANCE_ITEMS.map((item, i) => {
                      const sched = schedule[item.key];
                      const last = getLastEntry(vehicle.id, item.key);
                      const status = getServiceStatus(last, sched, vm.currentMiles);
                      const cfg = STATUS[status];
                      const nextDue = getNextDueText(last, sched);
                      const partTypeKey = SERVICE_PART_MAP[item.key]?.toLowerCase();
                      const dbPart = partTypeKey ? maintParts[partTypeKey] : null;
                      const price = PRICE_ESTIMATES[item.key];
                      return (
                        <div key={item.key} style={{ ...s.maintItem, ...(i > 0 ? s.maintItemBorder : {}) }}>
                          <div style={s.maintItemLeft}>
                            <div style={s.maintInfo}>
                              <div style={s.maintTopRow}>
                                <span style={s.maintLabel}>{item.label}</span>
                                <span style={{ ...s.statusBadge, backgroundColor: cfg.bg, color: cfg.color }}>
                                  <span style={{ ...s.statusDot, backgroundColor: cfg.dot }} />
                                  {cfg.label}
                                </span>
                              </div>
                              <p style={s.maintSub}>
                                {status === "chain"
                                  ? "Uses timing chain — no scheduled replacement"
                                  : last
                                    ? `Last: ${new Date(last.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}${last.miles ? ` · ${last.miles.toLocaleString()} mi` : ""}${nextDue ? `  ·  ${nextDue}` : ""}`
                                    : sched ? `Every ${sched.miles.toLocaleString()} mi or ${sched.months} mo` : ""}
                              </p>
                              {/* Part number + price row */}
                              {status !== "chain" && (
                                <div style={s.maintMeta}>
                                  {maintPartsLoading ? (
                                    <span style={s.maintMetaLoading}>looking up part…</span>
                                  ) : dbPart ? (
                                    <span style={s.partNumBadge}>{dbPart.brand} {dbPart.part_number}</span>
                                  ) : partTypeKey ? (
                                    <span style={s.maintMetaNone}>no part # on file</span>
                                  ) : null}
                                  {price && (
                                    <span style={s.priceBadge}>
                                      ${price.low}–${price.high}
                                      {price.note && <span style={s.priceNote}> · {price.note}</span>}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                          {status !== "chain" && (
                            <button style={s.logBtn} onClick={() => openLogForm(vehicle.id, item.key, item.label)}>
                              Log
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            })()}

            {/* ── Log service modal ── */}
            {logServiceForm && (
              <div style={s.modalOverlay} onClick={() => setLogServiceForm(null)}>
                <div style={s.modal} onClick={e => e.stopPropagation()}>
                  <div style={s.modalHeader}>
                    <h3 style={s.modalTitle}>Log {logServiceForm.label}</h3>
                    <button style={s.modalClose} onClick={() => setLogServiceForm(null)}>✕</button>
                  </div>
                  <div style={s.field}>
                    <label style={s.label}>Date</label>
                    <input style={s.input} type="date" value={logDate} onChange={e => setLogDate(e.target.value)} />
                  </div>
                  <div style={s.field}>
                    <label style={s.label}>Mileage at service</label>
                    <input style={s.input} type="number" placeholder="e.g. 95000" value={logMiles} onChange={e => setLogMiles(e.target.value)} />
                  </div>
                  <div style={s.row2}>
                    <div style={s.field}>
                      <label style={s.label}>Cost <span style={s.optional}>(optional)</span></label>
                      <input style={s.input} type="number" placeholder="e.g. 45" value={logCost} onChange={e => setLogCost(e.target.value)} />
                    </div>
                    <div style={s.field}>
                      <label style={s.label}>Notes <span style={s.optional}>(optional)</span></label>
                      <input style={s.input} type="text" placeholder="e.g. Mobil 1 5W-30" value={logNotes} onChange={e => setLogNotes(e.target.value)} />
                    </div>
                  </div>
                  <button style={s.primaryBtn} onClick={saveLoggedService}>Save service record</button>
                </div>
              </div>
            )}

            {/* ── Normal garage view (hidden when in maintenance drill-down) ── */}
            {!maintenanceVehicleId && <>
            {/* Empty state */}
            {garage.length === 0 && !addingCar && (
              <div style={{ ...s.card, ...s.centerCard, padding: "40px 24px" }}>
                <p style={s.garageEmptyTitle}>Your garage is empty</p>
                <p style={s.garageEmptyBody}>Save your vehicles here and find parts with one tap — no need to re-enter your car every time.</p>
                <button style={{ ...s.primaryBtn, marginTop: "16px" }} onClick={() => setAddingCar(true)}>
                  + Add your first car
                </button>
              </div>
            )}

            {/* Garage vehicle cards */}
            {garage.length > 0 && !addingCar && (
              <>
                {garage.map((vehicle) => (
                  <div key={vehicle.id}>
                  <div style={s.garageCard}>
                    {/* Make color accent */}
                    <div style={{ ...s.garageCardAccent, backgroundColor: MAKE_COLORS[vehicle.make] || "#64748b" }} />
                    <div style={s.garageCardBody}>
                      <div style={s.garageCardTop}>
                        <div>
                          {vehicle.nickname && <p style={s.garageNickname}>{vehicle.nickname}</p>}
                          <p style={s.garageVehicleName}>
                            {vehicle.year} {vehicle.make} {vehicle.model}
                            {vehicle.trim ? <span style={s.garageTrim}> · {vehicle.trim}</span> : ""}
                          </p>
                          {vehicle.engine && <p style={s.garageEngine}>{vehicle.engine}</p>}
                          {vehicle.vin && <p style={s.garageVinDisplay}>VIN: {vehicle.vin}</p>}
                          {vehicle.notes && <p style={s.garageNotes}>"{vehicle.notes}"</p>}
                          {/* Feature 1: recall badge */}
                          {recallsMap[vehicle.id] && !recallsMap[vehicle.id].loading && recallsMap[vehicle.id].items.length > 0 && (
                            <button style={s.recallBadge} onClick={() => setExpandedRecallId(expandedRecallId === vehicle.id ? null : vehicle.id)}>
                              {recallsMap[vehicle.id].items.length} open recall{recallsMap[vehicle.id].items.length > 1 ? "s" : ""}
                            </button>
                          )}
                          {recallsMap[vehicle.id]?.loading && <p style={s.recallLoading}>Checking recalls…</p>}
                          {recallsMap[vehicle.id] && !recallsMap[vehicle.id].loading && recallsMap[vehicle.id].items.length === 0 && (
                            <p style={s.recallClear}>No open recalls</p>
                          )}
                        </div>
                        {/* Delete */}
                        {confirmDelete === vehicle.id ? (
                          <div style={s.deleteConfirm}>
                            <p style={s.deleteConfirmText}>Remove?</p>
                            <button style={s.deleteConfirmYes} onClick={() => removeFromGarage(vehicle.id)}>Yes</button>
                            <button style={s.deleteConfirmNo} onClick={() => setConfirmDelete(null)}>No</button>
                          </div>
                        ) : (
                          <button style={s.deleteBtn} onClick={() => setConfirmDelete(vehicle.id)}>✕</button>
                        )}
                      </div>
                      <div style={s.garageCardBtns}>
                        <button style={s.findPartsBtn} onClick={() => findPartsForVehicle(vehicle)}>
                          Find parts →
                        </button>
                        <button style={s.maintBtn} onClick={() => { setMaintenanceVehicleId(vehicle.id); setAddingCar(false); fetchMaintParts(vehicle); }}>
                          Maintenance
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Recall detail panel */}
                  {expandedRecallId === vehicle.id && recallsMap[vehicle.id]?.items?.length > 0 && (
                    <div style={s.recallPanel}>
                      <p style={s.recallPanelTitle}>Open Recalls — {vehicle.year} {vehicle.make} {vehicle.model}</p>
                      {recallsMap[vehicle.id].items.map(r => (
                        <div key={r.NHTSACampaignNumber} style={s.recallItem}>
                          <div style={s.recallItemHeader}>
                            <span style={s.recallCampaign}>#{r.NHTSACampaignNumber}</span>
                            <span style={s.recallComponent}>{r.Component}</span>
                          </div>
                          <p style={s.recallConsequence}><strong>Risk:</strong> {r.Consequence}</p>
                          <p style={s.recallRemedy}><strong>Fix:</strong> {r.Remedy}</p>
                          {r.parkIt && <p style={s.recallParkIt}>NHTSA advises: do not drive until repaired</p>}
                        </div>
                      ))}
                    </div>
                  )}
                  </div>
                ))}

                <button style={{ ...s.primaryBtn, marginTop: "4px" }} onClick={() => setAddingCar(true)}>
                  + Add another car
                </button>
              </>
            )}

            {/* Add car form */}
            {addingCar && (
              <div style={s.card}>
                <div style={s.cardHeader}>
                  <h2 style={s.cardTitle}>Add a car</h2>
                  <button style={s.linkBtn} onClick={() => {
                    setAddingCar(false);
                    setGarageForm({ year: "", make: "", model: "", trim: "", engine: "", nickname: "", notes: "", vin: "" });
                    setGarageVin(""); setGarageVinError("");
                  }}>Cancel</button>
                </div>

                {/* VIN section */}
                <div style={s.vinBox}>
                  <div style={s.vinBoxHeader}>
                    <div>
                      <label style={{ ...s.label, color: "#3b82f6" }}>VIN lookup — fastest way</label>
                      <p style={s.hint}>Auto-fills year, make, model, trim, and engine specs</p>
                    </div>
                  </div>
                  <div style={s.vinRow}>
                    <input
                      style={{ ...s.input, flex: 1, textTransform: "uppercase", letterSpacing: "0.08em" }}
                      type="text" maxLength={17} placeholder="Enter 17-character VIN"
                      value={garageVin}
                      onChange={e => { setGarageVin(e.target.value.toUpperCase()); setGarageVinError(""); }}
                      onKeyDown={e => e.key === "Enter" && handleGarageVinLookup()}
                    />
                    <button style={s.vinBtn} onClick={handleGarageVinLookup} disabled={garageVinLoading}>
                      {garageVinLoading ? "Looking…" : "Look up"}
                    </button>
                  </div>
                  {garageVinError && <p style={s.errorText}>{garageVinError}</p>}
                  {garageForm.year && garageForm.make && (
                    <div style={{ ...s.successBanner, marginTop: "10px" }}>
                      <span>Filled in: {garageForm.year} {garageForm.make} {garageForm.model}{garageForm.trim ? ` ${garageForm.trim}` : ""}</span>
                    </div>
                  )}
                </div>

                <p style={s.orDivider}>— or fill in manually —</p>

                {/* Manual fields */}
                <div style={{ ...s.row3, gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr" }}>
                  <div style={s.field}>
                    <label style={s.label}>Year *</label>
                    <select style={s.select} value={garageForm.year} onChange={e => setGarageForm(f => ({ ...f, year: e.target.value }))}>
                      <option value="">Select year</option>
                      {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                  <div style={s.field}>
                    <label style={s.label}>Make *</label>
                    <select style={s.select} value={garageForm.make} onChange={e => setGarageForm(f => ({ ...f, make: e.target.value, model: "", trim: "" }))}>
                      <option value="">Select make</option>
                      {makes.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <div style={s.field}>
                    <label style={s.label}>Model *</label>
                    <select style={s.select} value={garageForm.model} onChange={e => setGarageForm(f => ({ ...f, model: e.target.value, trim: "" }))} disabled={!garageForm.make}>
                      <option value="">Select model</option>
                      {garageModels.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                </div>

                <div style={s.row2}>
                  <div style={s.field}>
                    <label style={s.label}>Trim <span style={s.optional}>(optional)</span></label>
                    <select style={s.select} value={garageForm.trim} onChange={e => setGarageForm(f => ({ ...f, trim: e.target.value }))} disabled={!garageForm.model || garageTrims.length === 0}>
                      <option value="">{garageTrims.length === 0 ? "Select model first" : "Select trim"}</option>
                      {garageTrims.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div style={s.field}>
                    <label style={s.label}>Engine <span style={s.optional}>(optional)</span></label>
                    <input style={s.input} type="text" placeholder="e.g. 2.5L I4 / 3.5L V6"
                      value={garageForm.engine} onChange={e => setGarageForm(f => ({ ...f, engine: e.target.value }))} />
                  </div>
                </div>

                <div style={s.row2}>
                  <div style={s.field}>
                    <label style={s.label}>Nickname <span style={s.optional}>(optional)</span></label>
                    <input style={s.input} type="text" placeholder="e.g. My Daily, Work Truck"
                      value={garageForm.nickname} onChange={e => setGarageForm(f => ({ ...f, nickname: e.target.value }))} />
                  </div>
                  <div style={s.field}>
                    <label style={s.label}>Notes <span style={s.optional}>(optional)</span></label>
                    <input style={s.input} type="text" placeholder="e.g. High mileage, modded"
                      value={garageForm.notes} onChange={e => setGarageForm(f => ({ ...f, notes: e.target.value }))} />
                  </div>
                </div>

                <button
                  style={{ ...s.primaryBtn, opacity: canAddCar ? 1 : 0.45, cursor: canAddCar ? "pointer" : "not-allowed" }}
                  onClick={addCarToGarage} disabled={!canAddCar}
                >
                  Save to garage
                </button>
              </div>
            )}
            </>}  {/* end !maintenanceVehicleId */}
          </>
        )}

        {/* ══ CHAT TAB ══ */}
        {tab === "chat" && (
          <div style={s.chatWrap}>
            <Chatbot year={year} make={make} model={model} trim={trim} />
          </div>
        )}

        <p style={s.footer}>7 makes · 36 models · 1990–2024</p>
      </main>

      {/* Bottom navigation */}
      <nav style={s.bottomNav}>
        {[
          { id: "fitment", label: "Fitment" },
          { id: "lookup", label: "Lookup" },
          { id: "garage", label: "Garage" },
          { id: "chat", label: "AI" },
        ].map(({ id, label }) => (
          <button
            key={id}
            style={{ ...s.navBtn, ...(tab === id ? s.navBtnActive : {}) }}
            onClick={() => switchTab(id)}
          >
            {id === "garage" && garage.length > 0 && tab !== id && (
              <span style={s.navDot} />
            )}
            <span style={tab === id ? s.navLabelActive : s.navLabel}>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const s = {
  page: { minHeight: "100vh", backgroundColor: "#0b0b0f", fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif", paddingBottom: "60px" },
  header: { backgroundColor: "#111118", borderBottom: "1px solid #1c1c28", position: "sticky", top: 0, zIndex: 100 },
  headerInner: { maxWidth: "600px", margin: "0 auto", padding: "14px 20px" },
  logo: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" },
  logoText: { fontSize: "20px", fontWeight: "700", color: "#e8e8f4", letterSpacing: "-0.02em" },
  tagline: { fontSize: "12px", color: "#32324a", margin: 0 },

  main: { maxWidth: "600px", margin: "0 auto", padding: "20px 16px 20px" },

  // Bottom navigation
  bottomNav: { position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "#111118", borderTop: "1px solid #1c1c28", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", height: "60px", zIndex: 100 },
  navBtn: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", border: "none", background: "none", cursor: "pointer", color: "#38384e", position: "relative", padding: "0", fontFamily: "inherit" },
  navBtnActive: { color: "#3b82f6", borderTop: "2px solid #3b82f6" },
  navLabel: { fontSize: "11px", fontWeight: "500", color: "#38384e" },
  navLabelActive: { fontSize: "11px", fontWeight: "600", color: "#3b82f6" },
  navDot: { position: "absolute", top: "10px", right: "calc(50% - 18px)", width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#3b82f6" },

  // Chat window wrapper
  chatWrap: { height: "calc(100vh - 54px - 60px - 40px)", borderRadius: "14px", overflow: "hidden", border: "1px solid #1c1c28" },

  card: { backgroundColor: "#16161e", borderRadius: "14px", padding: "20px", marginBottom: "10px", border: "1px solid #1e1e2c" },
  centerCard: { textAlign: "center", padding: "32px 20px" },
  cardHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" },
  cardTitle: { fontSize: "16px", fontWeight: "700", color: "#e2e2f0", margin: 0 },
  cardSubtitle: { fontSize: "14px", color: "#52526a", margin: "4px 0 16px" },

  resultCard: { border: "1px solid #1a3a22" },
  confirmedBanner: { color: "#4ade80", fontSize: "13px", fontWeight: "600", marginBottom: "10px", borderTop: "2px solid #4ade80", paddingTop: "10px" },
  fitBadge: { display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "#0c2018", color: "#4ade80", fontSize: "13px", fontWeight: "600", padding: "5px 12px", borderRadius: "99px", border: "1px solid #1e4430", marginBottom: "16px" },

  partNumberHero: { backgroundColor: "#111118", border: "1px solid #1e1e2c", borderRadius: "12px", padding: "16px", marginBottom: "12px", textAlign: "center" },
  partNumberLabel: { fontSize: "11px", fontWeight: "600", color: "#38384e", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px" },
  partNumberValue: { fontSize: "26px", fontWeight: "700", color: "#e8e8f8", letterSpacing: "0.04em", margin: "0 0 4px", fontFamily: "'SF Mono', 'Fira Code', 'Courier New', monospace" },
  partNumberBrand: { fontSize: "13px", color: "#52526a", margin: 0, fontWeight: "500" },

  infoGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "12px" },
  infoCell: { backgroundColor: "#111118", borderRadius: "10px", padding: "10px 12px", border: "1px solid #1c1c28" },
  infoCellLabel: { fontSize: "11px", fontWeight: "600", color: "#38384e", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 3px" },
  infoCellValue: { fontSize: "13px", fontWeight: "600", color: "#d8d8ec", margin: 0, lineHeight: "1.4" },

  noteBanner: { display: "flex", gap: "8px", alignItems: "flex-start", backgroundColor: "#1a1600", border: "1px solid #2c2200", borderRadius: "10px", padding: "10px 12px" },
  noteText: { fontSize: "13px", color: "#9a8030", lineHeight: "1.5", margin: 0 },

  noResultCard: { border: "1px solid #2e1a08", backgroundColor: "#120b04" },
  noResultTitle: { fontSize: "15px", fontWeight: "700", color: "#c2621c", margin: "0 0 6px" },
  noResultBody: { fontSize: "14px", color: "#7a4020", margin: 0, lineHeight: "1.55" },

  row3: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "10px" },
  row2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" },
  field: { display: "flex", flexDirection: "column", gap: "5px" },
  label: { fontSize: "12px", fontWeight: "600", color: "#707088", letterSpacing: "0.01em" },
  optional: { fontWeight: "400", color: "#34344a" },
  select: { padding: "9px 10px", borderRadius: "9px", border: "1.5px solid #22223a", fontSize: "14px", backgroundColor: "#191922", color: "#d0d0e8", width: "100%", outline: "none" },
  input: { padding: "9px 10px", borderRadius: "9px", border: "1.5px solid #22223a", fontSize: "14px", backgroundColor: "#191922", color: "#d0d0e8", width: "100%", outline: "none", boxSizing: "border-box" },

  primaryBtn: { width: "100%", padding: "13px", background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)", color: "#ffffff", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: "600", cursor: "pointer", letterSpacing: "0.01em" },

  vinBox: { backgroundColor: "#111118", borderRadius: "10px", padding: "14px", marginBottom: "14px", border: "1px solid #1c1c28" },
  vinBoxHeader: { marginBottom: "10px" },
  hint: { fontSize: "12px", color: "#34344a", margin: "2px 0 10px", lineHeight: "1.4" },
  vinRow: { display: "flex", gap: "8px", alignItems: "center" },
  vinBtn: { padding: "9px 16px", backgroundColor: "#1e3a8a", color: "#ffffff", border: "none", borderRadius: "9px", fontSize: "13px", fontWeight: "600", cursor: "pointer", whiteSpace: "nowrap" },
  vinToggle: { background: "none", border: "none", color: "#3b82f6", fontSize: "13px", fontWeight: "500", cursor: "pointer", padding: 0 },
  errorText: { fontSize: "13px", color: "#f87171", margin: "6px 0 0", fontWeight: "500" },
  successBanner: { display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#4ade80", backgroundColor: "#0a1a0c", border: "1px solid #1a3820", borderRadius: "9px", padding: "9px 12px", marginBottom: "14px", fontWeight: "500" },
  linkBtn: { background: "none", border: "none", color: "#52526a", fontSize: "13px", cursor: "pointer", padding: "6px 0 0", display: "block" },

  orDivider: { textAlign: "center", color: "#2e2e44", fontSize: "12px", margin: "0 0 14px", letterSpacing: "0.04em" },

  verifyTitle: { fontSize: "15px", fontWeight: "700", color: "#e2e2f0", margin: "0 0 4px" },
  verifySubtitle: { fontSize: "13px", color: "#52526a", margin: "0 0 14px" },
  verifyRow: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" },
  verifyBtn: { padding: "11px 8px", minHeight: "52px", borderRadius: "10px", border: "1.5px solid #22223a", fontSize: "14px", fontWeight: "600", cursor: "pointer", backgroundColor: "#191922", lineHeight: "1.4", color: "#707088" },
  verifyYes: { borderColor: "#1e4430", color: "#4ade80", backgroundColor: "#0c2018" },
  verifyNo: { borderColor: "#4a1a1a", color: "#f87171", backgroundColor: "#1a0909" },
  verifyMaybe: { borderColor: "#3a2800", color: "#f59e0b", backgroundColor: "#1a1200" },
  thankTitle: { fontSize: "15px", fontWeight: "700", color: "#e2e2f0", margin: "0 0 4px" },
  thankBody: { fontSize: "14px", color: "#52526a", margin: 0 },

  spinner: { width: "28px", height: "28px", border: "3px solid #1e1e2c", borderTopColor: "#3b82f6", borderRadius: "50%", animation: "spin 0.7s linear infinite", margin: "0 auto 12px" },
  loadingText: { fontSize: "14px", color: "#52526a", margin: 0, fontWeight: "500" },
  backBtn: { background: "none", border: "none", color: "#52526a", fontSize: "14px", cursor: "pointer", padding: "4px 0", fontWeight: "500" },
  stickySearchBar: { position: "fixed", bottom: "60px", left: 0, right: 0, backgroundColor: "#ffffff", borderTop: "1px solid #e0e0e8", padding: "12px 16px", zIndex: 99 },
  stickySearchBtn: { width: "100%", padding: "14px", backgroundColor: "#111111", color: "#ffffff", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: "600", cursor: "pointer" },
  footer: { textAlign: "center", fontSize: "12px", color: "#22223a", marginTop: "24px", letterSpacing: "0.02em" },

  // Maintenance
  maintHeader: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px", marginTop: "4px" },
  maintVehicleName: { fontSize: "17px", fontWeight: "700", color: "#e2e2f0", margin: "0 0 2px" },
  maintSubtitle: { fontSize: "12px", color: "#52526a", margin: 0 },
  milesRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
  milesUnit: { fontSize: "14px", color: "#52526a", whiteSpace: "nowrap" },
  maintItem: { display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "14px", paddingBottom: "14px" },
  maintItemBorder: { borderTop: "1px solid #1c1c28" },
  maintItemLeft: { display: "flex", alignItems: "flex-start", gap: "8px", flex: 1, minWidth: 0 },
  maintInfo: { flex: 1, minWidth: 0 },
  maintTopRow: { display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "3px" },
  maintLabel: { fontSize: "14px", fontWeight: "600", color: "#d8d8ec" },
  maintSub: { fontSize: "12px", color: "#3a3a52", margin: 0, lineHeight: "1.5" },
  statusBadge: { display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: "600", padding: "2px 8px", borderRadius: "99px" },
  statusDot: { width: "6px", height: "6px", borderRadius: "50%", flexShrink: 0 },
  logBtn: { marginLeft: "12px", padding: "6px 14px", backgroundColor: "#191922", color: "#b0b0cc", border: "1px solid #22223a", borderRadius: "7px", fontSize: "12px", fontWeight: "600", cursor: "pointer", flexShrink: 0 },
  maintMeta: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px", marginTop: "5px" },
  partNumBadge: { fontSize: "11px", fontWeight: "600", color: "#60a5fa", backgroundColor: "#0c1e38", border: "1px solid #1a3058", borderRadius: "5px", padding: "1px 7px", fontFamily: "'SF Mono', 'Fira Code', monospace", letterSpacing: "0.03em" },
  maintMetaLoading: { fontSize: "11px", color: "#34344a", fontStyle: "italic" },
  maintMetaNone: { fontSize: "11px", color: "#26263a" },
  priceBadge: { fontSize: "11px", fontWeight: "600", color: "#4ade80", backgroundColor: "#0c2018", border: "1px solid #1e4430", borderRadius: "5px", padding: "1px 7px" },
  priceNote: { fontWeight: "400", color: "#226038" },
  garageCardBtns: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" },
  maintBtn: { width: "100%", padding: "11px", backgroundColor: "#191922", color: "#b0b0cc", border: "1px solid #22223a", borderRadius: "10px", fontSize: "13px", fontWeight: "600", cursor: "pointer" },
  modalOverlay: { position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.75)", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 1000 },
  modal: { backgroundColor: "#16161e", borderRadius: "20px 20px 0 0", padding: "24px 20px 40px", width: "100%", maxWidth: "600px", boxShadow: "0 -8px 40px rgba(0,0,0,0.6)", border: "1px solid #1e1e2c", borderBottom: "none" },
  modalHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" },
  modalTitle: { fontSize: "17px", fontWeight: "700", color: "#e2e2f0", margin: 0 },
  modalClose: { background: "none", border: "none", fontSize: "18px", color: "#38384e", cursor: "pointer", padding: "0 4px" },

  // Recalls
  recallBadge: { display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "8px", padding: "4px 10px", backgroundColor: "transparent", color: "#f87171", border: "1px solid #4a1a1a", borderRadius: "99px", fontSize: "12px", fontWeight: "600", cursor: "pointer" },
  recallLoading: { fontSize: "11px", color: "#34344a", margin: "6px 0 0", fontStyle: "italic" },
  recallClear: { fontSize: "12px", color: "#4ade80", margin: "6px 0 0", fontWeight: "500" },
  recallPanel: { backgroundColor: "#120b04", border: "1px solid #2e1a08", borderRadius: "12px", padding: "16px", marginBottom: "10px" },
  recallPanelTitle: { fontSize: "13px", fontWeight: "700", color: "#c2621c", margin: "0 0 12px" },
  recallItem: { backgroundColor: "#191210", borderRadius: "8px", padding: "12px", marginBottom: "8px", border: "1px solid #2e1a08" },
  recallItemHeader: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px", flexWrap: "wrap" },
  recallCampaign: { fontSize: "11px", fontWeight: "700", color: "#38384e", fontFamily: "monospace" },
  recallComponent: { fontSize: "12px", fontWeight: "600", color: "#c2621c" },
  recallConsequence: { fontSize: "12px", color: "#7a4020", margin: "0 0 4px", lineHeight: "1.5" },
  recallRemedy: { fontSize: "12px", color: "#2a6a3a", margin: "0 0 4px", lineHeight: "1.5" },
  recallParkIt: { fontSize: "12px", fontWeight: "700", color: "#f87171", margin: "4px 0 0", backgroundColor: "#1a0909", borderRadius: "6px", padding: "6px 10px" },

  // DTC
  lookupToggle: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "16px", backgroundColor: "#111118", borderRadius: "12px", padding: "4px", border: "1px solid #1c1c28" },
  lookupToggleBtn: { padding: "10px 8px", borderRadius: "9px", border: "none", fontSize: "13px", fontWeight: "500", cursor: "pointer", backgroundColor: "transparent", color: "#52526a", fontFamily: "inherit" },
  lookupToggleBtnActive: { backgroundColor: "#191922", color: "#d8d8ec", fontWeight: "600" },
  dtcPartsList: { display: "flex", flexDirection: "column", gap: "6px" },
  dtcPartItem: { display: "flex", alignItems: "center", gap: "10px", padding: "8px 10px", backgroundColor: "#111118", borderRadius: "8px" },
  dtcPartBullet: { fontSize: "13px", color: "#3b82f6", fontWeight: "700", flexShrink: 0 },
  dtcPartName: { fontSize: "13px", color: "#c8c8e0", fontWeight: "500" },

  // Vehicle specs
  specsGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" },
  specItem: { display: "flex", flexDirection: "column", gap: "2px", backgroundColor: "#111118", borderRadius: "8px", padding: "8px 10px" },
  specLabel: { fontSize: "10px", fontWeight: "700", color: "#34344a", textTransform: "uppercase", letterSpacing: "0.06em" },
  specValue: { fontSize: "13px", fontWeight: "600", color: "#d0d0e8" },

  // Cross-reference
  crossRefSection: { marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #1c1c28" },
  crossRefTitle: { fontSize: "11px", fontWeight: "700", color: "#34344a", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" },
  crossRefList: { display: "flex", flexWrap: "wrap", gap: "6px" },
  crossRefBadge: { fontSize: "12px", color: "#b8b8d0", backgroundColor: "#191922", border: "1px solid #22223a", borderRadius: "6px", padding: "3px 9px" },

  // Buy links
  buyLinks: { marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #1c1c28" },
  buyLinksTitle: { fontSize: "11px", fontWeight: "700", color: "#34344a", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 10px" },
  buyLinksList: { display: "flex", flexDirection: "column", gap: "7px" },
  buyLink: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", borderRadius: "9px", border: "1px solid #1e1e2c", backgroundColor: "#111118", textDecoration: "none", color: "inherit" },
  buyLinkLeft: { display: "flex", alignItems: "center", gap: "9px" },
  buyLinkLogo: { width: "18px", height: "18px", borderRadius: "3px", objectFit: "contain" },
  buyLinkName: { fontSize: "13px", fontWeight: "600", color: "#c8c8e0" },
  buyLinkRight: { display: "flex", alignItems: "center", gap: "8px" },
  buyLinkPN: { fontSize: "12px", color: "#38384e", fontFamily: "'SF Mono', 'Fira Code', monospace", backgroundColor: "#191922", padding: "2px 7px", borderRadius: "4px" },
  buyLinkArrow: { fontSize: "15px", color: "#38384e" },

  // Transmission toggle
  transToggle: { display: "flex", gap: "4px", backgroundColor: "#111118", borderRadius: "9px", padding: "3px", border: "1px solid #1c1c28" },
  transBtn: { flex: 1, padding: "7px 4px", borderRadius: "7px", border: "none", fontSize: "12px", fontWeight: "500", cursor: "pointer", backgroundColor: "transparent", color: "#52526a", fontFamily: "inherit" },
  transBtnActive: { backgroundColor: "#191922", color: "#e0e0f0", fontWeight: "700" },

  // Vehicle quick search
  vsWrap: { position: "relative", marginBottom: "16px" },
  vsInputRow: { display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#111118", borderRadius: "10px", padding: "9px 12px", border: "1.5px solid #1e1e2c" },
  vsInput: { flex: 1, background: "none", border: "none", outline: "none", fontSize: "13px", color: "#c8c8e0", minWidth: 0 },
  vsClear: { background: "none", border: "none", color: "#38384e", fontSize: "14px", cursor: "pointer", padding: "0 2px", lineHeight: 1, flexShrink: 0 },
  vsDropdown: { position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, backgroundColor: "#16161e", border: "1.5px solid #1e1e2c", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.5)", zIndex: 50, overflow: "hidden" },
  vsItem: { display: "flex", alignItems: "center", gap: "10px", width: "100%", padding: "10px 14px", background: "none", border: "none", cursor: "pointer", textAlign: "left", borderBottom: "1px solid #1a1a26" },
  vsItemLogo: { width: "28px", height: "28px", borderRadius: "6px", objectFit: "contain", flexShrink: 0, backgroundColor: "#111118", padding: "2px" },
  vsItemText: { display: "flex", flexDirection: "column", gap: "1px", flex: 1, minWidth: 0 },
  vsItemVehicle: { fontSize: "13px", fontWeight: "600", color: "#d0d0e8", lineHeight: 1.3 },
  vsItemTrim: { fontWeight: "400", color: "#52526a" },
  vsItemMeta: { fontSize: "11px", color: "#38384e", fontWeight: "500" },
  vsItemTransTag: { color: "#3b82f6", fontWeight: "700" },
  vsNoResult: { fontSize: "13px", color: "#38384e", padding: "12px 14px", margin: 0, textAlign: "center" },

  // Garage source banner
  garageSourceBanner: { display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#0c1a30", border: "1px solid #1a2e50", borderRadius: "9px", padding: "9px 12px", marginBottom: "14px", fontSize: "13px", color: "#60a5fa" },
  garageSourceClear: { marginLeft: "auto", background: "none", border: "none", color: "#263a58", fontSize: "14px", cursor: "pointer", padding: 0, lineHeight: 1 },

  garageEmptyTitle: { fontSize: "17px", fontWeight: "700", color: "#e2e2f0", margin: "0 0 6px" },
  garageEmptyBody: { fontSize: "14px", color: "#52526a", margin: "0 auto", lineHeight: "1.6", maxWidth: "300px" },

  // Garage cards
  garageCard: { backgroundColor: "#16161e", borderRadius: "14px", marginBottom: "10px", border: "1px solid #1e1e2c", overflow: "hidden", display: "flex" },
  garageCardAccent: { width: "4px", flexShrink: 0 },
  garageCardBody: { flex: 1, padding: "16px" },
  garageCardTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" },
  garageNickname: { fontSize: "11px", fontWeight: "700", color: "#3b82f6", textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 3px" },
  garageVehicleName: { fontSize: "16px", fontWeight: "700", color: "#d8d8ec", margin: "0 0 4px" },
  garageTrim: { fontWeight: "500", color: "#52526a" },
  garageEngine: { fontSize: "13px", color: "#52526a", margin: "0 0 3px" },
  garageVinDisplay: { fontSize: "11px", color: "#34344a", fontFamily: "'SF Mono', monospace", margin: "0 0 3px", letterSpacing: "0.03em" },
  garageNotes: { fontSize: "12px", color: "#34344a", fontStyle: "italic", margin: "4px 0 0" },
  findPartsBtn: { width: "100%", padding: "11px", backgroundColor: "#1e3a8a", color: "#ffffff", border: "none", borderRadius: "10px", fontSize: "14px", fontWeight: "600", cursor: "pointer" },
  deleteBtn: { background: "none", border: "1px solid #22223a", color: "#38384e", borderRadius: "6px", fontSize: "12px", cursor: "pointer", padding: "4px 7px", lineHeight: 1, flexShrink: 0 },
  deleteConfirm: { display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flexShrink: 0 },
  deleteConfirmText: { fontSize: "11px", color: "#f87171", fontWeight: "600", margin: 0 },
  deleteConfirmYes: { padding: "3px 10px", backgroundColor: "#dc2626", color: "#fff", border: "none", borderRadius: "5px", fontSize: "12px", cursor: "pointer", fontWeight: "600", width: "100%" },
  deleteConfirmNo: { padding: "3px 10px", backgroundColor: "#191922", color: "#52526a", border: "none", borderRadius: "5px", fontSize: "12px", cursor: "pointer", width: "100%" },
};
