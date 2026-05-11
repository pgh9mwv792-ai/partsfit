-- BMW OEM Oil Filter Part Numbers
-- Paste this into the Supabase SQL editor and click Run
--
-- Part number key:
--   11427512300 → 1992–2006 BMW M50/M52/M54 engines (E36/E39/E46/E83 era)
--   11427566327 → 2004–2016 BMW N52/N54/N55/N20 engines (E60/E90/F10/F30 era)
--   11427953129 → 2017–2024 BMW B46/B48/B58/S58 engines (G-chassis era)
--   11427583220 → 2008–2013 BMW S65 V8 engine (E90/E92 M3 specific)
--   11427952417 → 2015–2020 BMW S55 twin-turbo engine (F80/F82 M3/M4)

INSERT INTO "Parts" (year, make, model, part_type, part_number, brand, engine, notes) VALUES

-- ══════════════════════════════════════════════════════
-- 3 Series  (1992–2024)
-- E36 (1992–1998), E46 (1999–2005), E90 (2006–2011), F30 (2012–2018), G20 (2019–2024)
-- ══════════════════════════════════════════════════════
(1992, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '1.8L I4 M42 / 2.5L I6 M50', 'OEM BMW filter kit'),
(1993, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '1.8L I4 M42 / 2.5L I6 M50', 'OEM BMW filter kit'),
(1994, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '1.8L I4 M42 / 3.0L I6 M50', 'OEM BMW filter kit'),
(1995, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '1.8L I4 M42 / 2.5L I6 M52 / 3.0L I6 M50', 'OEM BMW filter kit'),
(1996, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '1.9L I4 M44 / 2.5L I6 M52 / 2.8L I6 M52', 'OEM BMW filter kit'),
(1997, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '1.9L I4 M44 / 2.5L I6 M52 / 2.8L I6 M52', 'OEM BMW filter kit'),
(1998, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '1.9L I4 M44 / 2.5L I6 M52 / 2.8L I6 M52', 'OEM BMW filter kit'),
(1999, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M52TU / 2.8L I6 M52TU', 'OEM BMW filter kit'),
(2000, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M54 / 2.8L I6 M52TU / 3.0L I6 M54', 'OEM BMW filter kit'),
(2001, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M54 / 3.0L I6 M54', 'OEM BMW filter kit'),
(2002, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M54 / 3.0L I6 M54', 'OEM BMW filter kit'),
(2003, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M54 / 3.0L I6 M54', 'OEM BMW filter kit'),
(2004, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M54 / 3.0L I6 M54', 'OEM BMW filter kit'),
(2005, 'BMW', '3 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M54 / 3.0L I6 M54', 'OEM BMW filter kit'),
(2006, 'BMW', '3 Series', 'Oil filter', '11427566327', 'BMW', '2.5L I6 N52 / 3.0L I6 N52', 'OEM BMW filter kit'),
(2007, 'BMW', '3 Series', 'Oil filter', '11427566327', 'BMW', '2.5L I6 N52 / 3.0L I6 N52 / 3.0L I6 N54 Turbo', 'OEM BMW filter kit'),
(2008, 'BMW', '3 Series', 'Oil filter', '11427566327', 'BMW', '2.5L I6 N52 / 3.0L I6 N52 / 3.0L I6 N54 Turbo', 'OEM BMW filter kit'),
(2009, 'BMW', '3 Series', 'Oil filter', '11427566327', 'BMW', '2.5L I6 N52 / 3.0L I6 N52 / 3.0L I6 N54 Turbo', 'OEM BMW filter kit'),
(2010, 'BMW', '3 Series', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52 / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2011, 'BMW', '3 Series', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52 / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2012, 'BMW', '3 Series', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2013, 'BMW', '3 Series', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2014, 'BMW', '3 Series', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2015, 'BMW', '3 Series', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2016, 'BMW', '3 Series', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2017, 'BMW', '3 Series', 'Oil filter', '11427566327', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2018, 'BMW', '3 Series', 'Oil filter', '11427566327', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2019, 'BMW', '3 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2020, 'BMW', '3 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2021, 'BMW', '3 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2022, 'BMW', '3 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2023, 'BMW', '3 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2024, 'BMW', '3 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),

-- ══════════════════════════════════════════════════════
-- 5 Series  (1990–2024)
-- E34 (1990–1995), E39 (1996–2003), E60 (2004–2010), F10 (2011–2016), G30 (2017–2024)
-- ══════════════════════════════════════════════════════
(1990, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M20 / 3.5L I6 M30', 'OEM BMW filter kit'),
(1991, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M50 / 3.5L I6 M30', 'OEM BMW filter kit'),
(1992, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M50 / 3.0L I6 M50 / 4.0L V8 M60', 'OEM BMW filter kit'),
(1993, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M50 / 3.0L I6 M50 / 4.0L V8 M60', 'OEM BMW filter kit'),
(1994, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M50 / 3.0L I6 M50 / 4.0L V8 M60', 'OEM BMW filter kit'),
(1995, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M50 / 3.0L I6 M50 / 4.0L V8 M60', 'OEM BMW filter kit'),
(1996, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.8L I6 M52 / 4.0L V8 M62', 'OEM BMW filter kit'),
(1997, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.8L I6 M52 / 4.4L V8 M62', 'OEM BMW filter kit'),
(1998, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.8L I6 M52 / 4.4L V8 M62', 'OEM BMW filter kit'),
(1999, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.8L I6 M52TU / 4.4L V8 M62', 'OEM BMW filter kit'),
(2000, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M54 / 3.0L I6 M54 / 4.4L V8 M62', 'OEM BMW filter kit'),
(2001, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M54 / 3.0L I6 M54 / 4.4L V8 M62', 'OEM BMW filter kit'),
(2002, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M54 / 3.0L I6 M54 / 4.4L V8 M62', 'OEM BMW filter kit'),
(2003, 'BMW', '5 Series', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M54 / 3.0L I6 M54 / 4.4L V8 M62', 'OEM BMW filter kit'),
(2004, 'BMW', '5 Series', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52 / 4.4L V8 N62', 'OEM BMW filter kit'),
(2005, 'BMW', '5 Series', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52 / 4.4L V8 N62', 'OEM BMW filter kit'),
(2006, 'BMW', '5 Series', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52 / 4.4L V8 N62', 'OEM BMW filter kit'),
(2007, 'BMW', '5 Series', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52 / 3.0L I6 N54 Turbo / 4.8L V8 N62', 'OEM BMW filter kit'),
(2008, 'BMW', '5 Series', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52 / 3.0L I6 N54 Turbo / 4.8L V8 N62', 'OEM BMW filter kit'),
(2009, 'BMW', '5 Series', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52 / 3.0L I6 N54 Turbo / 4.8L V8 N62', 'OEM BMW filter kit'),
(2010, 'BMW', '5 Series', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52 / 3.0L I6 N54 Turbo / 4.8L V8 N62', 'OEM BMW filter kit'),
(2011, 'BMW', '5 Series', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52 / 3.0L I6 N55 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2012, 'BMW', '5 Series', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo / 4.4L V8 N63', 'OEM BMW filter kit'),
(2013, 'BMW', '5 Series', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo / 4.4L V8 N63', 'OEM BMW filter kit'),
(2014, 'BMW', '5 Series', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo / 4.4L V8 N63', 'OEM BMW filter kit'),
(2015, 'BMW', '5 Series', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo / 4.4L V8 N63', 'OEM BMW filter kit'),
(2016, 'BMW', '5 Series', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo / 4.4L V8 N63', 'OEM BMW filter kit'),
(2017, 'BMW', '5 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2018, 'BMW', '5 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2019, 'BMW', '5 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2020, 'BMW', '5 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2021, 'BMW', '5 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2022, 'BMW', '5 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2023, 'BMW', '5 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2024, 'BMW', '5 Series', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),

-- ══════════════════════════════════════════════════════
-- X3  (2004–2024)
-- E83 (2004–2010), F25 (2011–2017), G01 (2018–2024)
-- ══════════════════════════════════════════════════════
(2004, 'BMW', 'X3', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M54', 'OEM BMW filter kit'),
(2005, 'BMW', 'X3', 'Oil filter', '11427512300', 'BMW', '2.5L I6 M54 / 3.0L I6 M54', 'OEM BMW filter kit'),
(2006, 'BMW', 'X3', 'Oil filter', '11427566327', 'BMW', '2.5L I6 N52 / 3.0L I6 N52', 'OEM BMW filter kit'),
(2007, 'BMW', 'X3', 'Oil filter', '11427566327', 'BMW', '2.5L I6 N52 / 3.0L I6 N52', 'OEM BMW filter kit'),
(2008, 'BMW', 'X3', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52', 'OEM BMW filter kit'),
(2009, 'BMW', 'X3', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52', 'OEM BMW filter kit'),
(2010, 'BMW', 'X3', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52', 'OEM BMW filter kit'),
(2011, 'BMW', 'X3', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2012, 'BMW', 'X3', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2013, 'BMW', 'X3', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2014, 'BMW', 'X3', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2015, 'BMW', 'X3', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2016, 'BMW', 'X3', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2017, 'BMW', 'X3', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo', 'OEM BMW filter kit'),
(2018, 'BMW', 'X3', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2019, 'BMW', 'X3', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2020, 'BMW', 'X3', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2021, 'BMW', 'X3', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2022, 'BMW', 'X3', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2023, 'BMW', 'X3', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),
(2024, 'BMW', 'X3', 'Oil filter', '11427953129', 'BMW', '2.0L I4 B46 Turbo / 3.0L I6 B58 Turbo', 'OEM BMW filter kit'),

-- ══════════════════════════════════════════════════════
-- X5  (2000–2024)
-- E53 (2000–2006), E70 (2007–2013), F15 (2014–2018), G05 (2019–2024)
-- ══════════════════════════════════════════════════════
(2000, 'BMW', 'X5', 'Oil filter', '11427512300', 'BMW', '3.0L I6 M54 / 4.4L V8 M62', 'OEM BMW filter kit'),
(2001, 'BMW', 'X5', 'Oil filter', '11427512300', 'BMW', '3.0L I6 M54 / 4.4L V8 M62', 'OEM BMW filter kit'),
(2002, 'BMW', 'X5', 'Oil filter', '11427512300', 'BMW', '3.0L I6 M54 / 4.4L V8 M62 / 4.6L V8 S62', 'OEM BMW filter kit'),
(2003, 'BMW', 'X5', 'Oil filter', '11427512300', 'BMW', '3.0L I6 M54 / 4.4L V8 M62 / 4.6L V8 S62', 'OEM BMW filter kit'),
(2004, 'BMW', 'X5', 'Oil filter', '11427512300', 'BMW', '3.0L I6 M54 / 4.4L V8 M62 / 4.8L V8 N62', 'OEM BMW filter kit'),
(2005, 'BMW', 'X5', 'Oil filter', '11427512300', 'BMW', '3.0L I6 M54 / 4.4L V8 N62 / 4.8L V8 N62', 'OEM BMW filter kit'),
(2006, 'BMW', 'X5', 'Oil filter', '11427512300', 'BMW', '3.0L I6 M54 / 4.4L V8 N62 / 4.8L V8 N62', 'OEM BMW filter kit'),
(2007, 'BMW', 'X5', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N52 / 4.8L V8 N62', 'OEM BMW filter kit'),
(2008, 'BMW', 'X5', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N54 Turbo / 4.8L V8 N62', 'OEM BMW filter kit'),
(2009, 'BMW', 'X5', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N54 Turbo / 4.8L V8 N62', 'OEM BMW filter kit'),
(2010, 'BMW', 'X5', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N55 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2011, 'BMW', 'X5', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N55 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2012, 'BMW', 'X5', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N55 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2013, 'BMW', 'X5', 'Oil filter', '11427566327', 'BMW', '3.0L I6 N55 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2014, 'BMW', 'X5', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2015, 'BMW', 'X5', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2016, 'BMW', 'X5', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2017, 'BMW', 'X5', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2018, 'BMW', 'X5', 'Oil filter', '11427566327', 'BMW', '2.0L I4 N20 Turbo / 3.0L I6 N55 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2019, 'BMW', 'X5', 'Oil filter', '11427953129', 'BMW', '3.0L I6 B58 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2020, 'BMW', 'X5', 'Oil filter', '11427953129', 'BMW', '3.0L I6 B58 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2021, 'BMW', 'X5', 'Oil filter', '11427953129', 'BMW', '3.0L I6 B58 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2022, 'BMW', 'X5', 'Oil filter', '11427953129', 'BMW', '3.0L I6 B58 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2023, 'BMW', 'X5', 'Oil filter', '11427953129', 'BMW', '3.0L I6 B58 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),
(2024, 'BMW', 'X5', 'Oil filter', '11427953129', 'BMW', '3.0L I6 B58 Turbo / 4.4L V8 N63 Turbo', 'OEM BMW filter kit'),

-- ══════════════════════════════════════════════════════
-- M3  (1990–2024)
-- E30 M3 ended ~1991, E36 M3 (1995–1999), E46 M3 (2001–2006),
-- E90/E92/E93 M3 (2008–2013), F80 M3 (2015–2020), G80 M3 (2021–2024)
-- ══════════════════════════════════════════════════════
(1990, 'BMW', 'M3', 'Oil filter', '11421723433', 'BMW', '2.3L I4 S14', 'OEM BMW filter kit — E30 M3'),
(1991, 'BMW', 'M3', 'Oil filter', '11421723433', 'BMW', '2.3L I4 S14', 'OEM BMW filter kit — E30 M3'),
(1995, 'BMW', 'M3', 'Oil filter', '11427512300', 'BMW', '3.0L I6 S50 / 3.2L I6 S52', 'OEM BMW filter kit — E36 M3'),
(1996, 'BMW', 'M3', 'Oil filter', '11427512300', 'BMW', '3.2L I6 S52', 'OEM BMW filter kit — E36 M3'),
(1997, 'BMW', 'M3', 'Oil filter', '11427512300', 'BMW', '3.2L I6 S52', 'OEM BMW filter kit — E36 M3'),
(1998, 'BMW', 'M3', 'Oil filter', '11427512300', 'BMW', '3.2L I6 S52', 'OEM BMW filter kit — E36 M3'),
(1999, 'BMW', 'M3', 'Oil filter', '11427512300', 'BMW', '3.2L I6 S52', 'OEM BMW filter kit — E36 M3'),
(2001, 'BMW', 'M3', 'Oil filter', '11427512300', 'BMW', '3.2L I6 S54', 'OEM BMW filter kit — E46 M3'),
(2002, 'BMW', 'M3', 'Oil filter', '11427512300', 'BMW', '3.2L I6 S54', 'OEM BMW filter kit — E46 M3'),
(2003, 'BMW', 'M3', 'Oil filter', '11427512300', 'BMW', '3.2L I6 S54', 'OEM BMW filter kit — E46 M3'),
(2004, 'BMW', 'M3', 'Oil filter', '11427512300', 'BMW', '3.2L I6 S54', 'OEM BMW filter kit — E46 M3'),
(2005, 'BMW', 'M3', 'Oil filter', '11427512300', 'BMW', '3.2L I6 S54', 'OEM BMW filter kit — E46 M3'),
(2006, 'BMW', 'M3', 'Oil filter', '11427512300', 'BMW', '3.2L I6 S54', 'OEM BMW filter kit — E46 M3'),
(2008, 'BMW', 'M3', 'Oil filter', '11427583220', 'BMW', '4.0L V8 S65', 'OEM BMW filter kit — E90/E92 M3'),
(2009, 'BMW', 'M3', 'Oil filter', '11427583220', 'BMW', '4.0L V8 S65', 'OEM BMW filter kit — E90/E92 M3'),
(2010, 'BMW', 'M3', 'Oil filter', '11427583220', 'BMW', '4.0L V8 S65', 'OEM BMW filter kit — E90/E92 M3'),
(2011, 'BMW', 'M3', 'Oil filter', '11427583220', 'BMW', '4.0L V8 S65', 'OEM BMW filter kit — E90/E92 M3'),
(2012, 'BMW', 'M3', 'Oil filter', '11427583220', 'BMW', '4.0L V8 S65', 'OEM BMW filter kit — E90/E92 M3'),
(2013, 'BMW', 'M3', 'Oil filter', '11427583220', 'BMW', '4.0L V8 S65', 'OEM BMW filter kit — E90/E92 M3'),
(2015, 'BMW', 'M3', 'Oil filter', '11427952417', 'BMW', '3.0L I6 Turbo S55', 'OEM BMW filter kit — F80 M3'),
(2016, 'BMW', 'M3', 'Oil filter', '11427952417', 'BMW', '3.0L I6 Turbo S55', 'OEM BMW filter kit — F80 M3'),
(2017, 'BMW', 'M3', 'Oil filter', '11427952417', 'BMW', '3.0L I6 Turbo S55', 'OEM BMW filter kit — F80 M3'),
(2018, 'BMW', 'M3', 'Oil filter', '11427952417', 'BMW', '3.0L I6 Turbo S55', 'OEM BMW filter kit — F80 M3'),
(2019, 'BMW', 'M3', 'Oil filter', '11427952417', 'BMW', '3.0L I6 Turbo S55', 'OEM BMW filter kit — F80 M3'),
(2020, 'BMW', 'M3', 'Oil filter', '11427952417', 'BMW', '3.0L I6 Turbo S55', 'OEM BMW filter kit — F80 M3'),
(2021, 'BMW', 'M3', 'Oil filter', '11427953129', 'BMW', '3.0L I6 Turbo S58', 'OEM BMW filter kit — G80 M3'),
(2022, 'BMW', 'M3', 'Oil filter', '11427953129', 'BMW', '3.0L I6 Turbo S58', 'OEM BMW filter kit — G80 M3'),
(2023, 'BMW', 'M3', 'Oil filter', '11427953129', 'BMW', '3.0L I6 Turbo S58', 'OEM BMW filter kit — G80 M3'),
(2024, 'BMW', 'M3', 'Oil filter', '11427953129', 'BMW', '3.0L I6 Turbo S58', 'OEM BMW filter kit — G80 M3');
