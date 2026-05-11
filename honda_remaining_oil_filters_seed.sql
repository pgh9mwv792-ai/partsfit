-- Honda OEM Oil Filter Part Numbers — CR-V, Pilot, Odyssey
-- (Honda Civic and Accord are already in the database)
-- Paste this into the Supabase SQL editor and click Run
--
-- Part number key:
--   15400-PLM-A02 → OEM Honda filter, fits virtually all Honda 1984–2025
--   15400-RTA-003 → OEM Honda filter for larger-displacement V6 engines (Pilot/Odyssey)

INSERT INTO "Parts" (year, make, model, part_type, part_number, brand, engine, notes) VALUES

-- ══════════════════════════════════════════════════════
-- CR-V  (1997–2024)
-- ══════════════════════════════════════════════════════
(1997, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.0L I4 B20B4', 'OEM Honda spin-on filter'),
(1998, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.0L I4 B20B4', 'OEM Honda spin-on filter'),
(1999, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.0L I4 B20B4', 'OEM Honda spin-on filter'),
(2000, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.0L I4 B20B4', 'OEM Honda spin-on filter'),
(2001, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.0L I4 B20Z2', 'OEM Honda spin-on filter'),
(2002, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24A1', 'OEM Honda spin-on filter'),
(2003, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24A1', 'OEM Honda spin-on filter'),
(2004, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24A1', 'OEM Honda spin-on filter'),
(2005, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24A4', 'OEM Honda spin-on filter'),
(2006, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24A4', 'OEM Honda spin-on filter'),
(2007, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24Z1', 'OEM Honda spin-on filter'),
(2008, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24Z1', 'OEM Honda spin-on filter'),
(2009, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24Z1', 'OEM Honda spin-on filter'),
(2010, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24Z1', 'OEM Honda spin-on filter'),
(2011, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24Z6', 'OEM Honda spin-on filter'),
(2012, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24Z6', 'OEM Honda spin-on filter'),
(2013, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24Z6', 'OEM Honda spin-on filter'),
(2014, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24Z6', 'OEM Honda spin-on filter'),
(2015, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24Z6', 'OEM Honda spin-on filter'),
(2016, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24Z6', 'OEM Honda spin-on filter'),
(2017, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '2.4L I4 K24W / 1.5L I4 Turbo L15B7', 'OEM Honda spin-on filter'),
(2018, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '1.5L I4 Turbo L15B7 / 2.4L I4 K24W', 'OEM Honda spin-on filter'),
(2019, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '1.5L I4 Turbo L15B7 / 2.4L I4 K24W', 'OEM Honda spin-on filter'),
(2020, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '1.5L I4 Turbo L15B7 / 2.0L Hybrid', 'OEM Honda spin-on filter'),
(2021, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '1.5L I4 Turbo L15B7 / 2.0L Hybrid', 'OEM Honda spin-on filter'),
(2022, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '1.5L I4 Turbo L15B7 / 2.0L Hybrid', 'OEM Honda spin-on filter'),
(2023, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '1.5L I4 Turbo / 2.0L PHEV', 'OEM Honda spin-on filter'),
(2024, 'Honda', 'CR-V', 'Oil filter', '15400-PLM-A02', 'Honda', '1.5L I4 Turbo / 2.0L PHEV', 'OEM Honda spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Pilot  (2003–2024)
-- ══════════════════════════════════════════════════════
(2003, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A4', 'OEM Honda spin-on filter'),
(2004, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A4', 'OEM Honda spin-on filter'),
(2005, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A4', 'OEM Honda spin-on filter'),
(2006, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A6', 'OEM Honda spin-on filter'),
(2007, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A6', 'OEM Honda spin-on filter'),
(2008, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A6', 'OEM Honda spin-on filter'),
(2009, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Z4', 'OEM Honda spin-on filter'),
(2010, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Z4', 'OEM Honda spin-on filter'),
(2011, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Z4', 'OEM Honda spin-on filter'),
(2012, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Z4', 'OEM Honda spin-on filter'),
(2013, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Z4', 'OEM Honda spin-on filter'),
(2014, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Z4', 'OEM Honda spin-on filter'),
(2015, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Z4', 'OEM Honda spin-on filter'),
(2016, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y5', 'OEM Honda spin-on filter'),
(2017, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y5', 'OEM Honda spin-on filter'),
(2018, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y5', 'OEM Honda spin-on filter'),
(2019, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y5', 'OEM Honda spin-on filter'),
(2020, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y5', 'OEM Honda spin-on filter'),
(2021, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y5', 'OEM Honda spin-on filter'),
(2022, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y5', 'OEM Honda spin-on filter'),
(2023, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y5', 'OEM Honda spin-on filter'),
(2024, 'Honda', 'Pilot', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y6', 'OEM Honda spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Odyssey  (1995–2024)
-- ══════════════════════════════════════════════════════
(1995, 'Honda', 'Odyssey', 'Oil filter', '15400-PLM-A02', 'Honda', '2.2L I4 F22B6', 'OEM Honda spin-on filter'),
(1996, 'Honda', 'Odyssey', 'Oil filter', '15400-PLM-A02', 'Honda', '2.2L I4 F22B6', 'OEM Honda spin-on filter'),
(1997, 'Honda', 'Odyssey', 'Oil filter', '15400-PLM-A02', 'Honda', '2.2L I4 F22B6', 'OEM Honda spin-on filter'),
(1998, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A1', 'OEM Honda spin-on filter'),
(1999, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A1', 'OEM Honda spin-on filter'),
(2000, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A1', 'OEM Honda spin-on filter'),
(2001, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A1', 'OEM Honda spin-on filter'),
(2002, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A4', 'OEM Honda spin-on filter'),
(2003, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A4', 'OEM Honda spin-on filter'),
(2004, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A6', 'OEM Honda spin-on filter'),
(2005, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A6', 'OEM Honda spin-on filter'),
(2006, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A6', 'OEM Honda spin-on filter'),
(2007, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A6', 'OEM Honda spin-on filter'),
(2008, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A6', 'OEM Honda spin-on filter'),
(2009, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A6', 'OEM Honda spin-on filter'),
(2010, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35A6', 'OEM Honda spin-on filter'),
(2011, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Z6', 'OEM Honda spin-on filter'),
(2012, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Z6', 'OEM Honda spin-on filter'),
(2013, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Z6', 'OEM Honda spin-on filter'),
(2014, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y2', 'OEM Honda spin-on filter'),
(2015, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y2', 'OEM Honda spin-on filter'),
(2016, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y2', 'OEM Honda spin-on filter'),
(2017, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y2', 'OEM Honda spin-on filter'),
(2018, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y6', 'OEM Honda spin-on filter'),
(2019, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y6', 'OEM Honda spin-on filter'),
(2020, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y6', 'OEM Honda spin-on filter'),
(2021, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y6', 'OEM Honda spin-on filter'),
(2022, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y6', 'OEM Honda spin-on filter'),
(2023, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y6', 'OEM Honda spin-on filter'),
(2024, 'Honda', 'Odyssey', 'Oil filter', '15400-RTA-003', 'Honda', '3.5L V6 J35Y6', 'OEM Honda spin-on filter');
