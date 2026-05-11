-- Chevrolet OEM (AC Delco) Oil Filter Part Numbers
-- Paste this into the Supabase SQL editor and click Run
--
-- Part number key:
--   PF46   → 1990–2005 Chevy 4-cyl / V6 (2.2L/2.4L/3.1L/3.4L/3.8L)
--   PF48   → 1990–2013 Chevy V8 engines (4.3L/4.8L/5.0L/5.3L/5.7L/6.0L) + some V6
--   PF63E  → 2014–2024 Chevy EcoTec3 V8 engines + 3.6L V6 trucks
--   PF64   → 2013–2024 Chevy EcoTec 4-cyl / turbocharged engines

INSERT INTO "Parts" (year, make, model, part_type, part_number, brand, engine, notes) VALUES

-- ══════════════════════════════════════════════════════
-- Silverado  (1999–2024)
-- ══════════════════════════════════════════════════════
(1999, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8', 'OEM AC Delco spin-on filter'),
(2000, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8', 'OEM AC Delco spin-on filter'),
(2001, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8', 'OEM AC Delco spin-on filter'),
(2002, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8', 'OEM AC Delco spin-on filter'),
(2003, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8', 'OEM AC Delco spin-on filter'),
(2004, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8', 'OEM AC Delco spin-on filter'),
(2005, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8', 'OEM AC Delco spin-on filter'),
(2006, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8', 'OEM AC Delco spin-on filter'),
(2007, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8 / 6.2L V8', 'OEM AC Delco spin-on filter'),
(2008, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8 / 6.2L V8', 'OEM AC Delco spin-on filter'),
(2009, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8 / 6.2L V8', 'OEM AC Delco spin-on filter'),
(2010, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8 / 6.2L V8', 'OEM AC Delco spin-on filter'),
(2011, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8 / 6.2L V8', 'OEM AC Delco spin-on filter'),
(2012, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8 / 6.2L V8', 'OEM AC Delco spin-on filter'),
(2013, 'Chevrolet', 'Silverado', 'Oil filter', 'PF48', 'AC Delco', '4.3L V6 / 4.8L V8 / 5.3L V8 / 6.0L V8 / 6.2L V8', 'OEM AC Delco spin-on filter'),
(2014, 'Chevrolet', 'Silverado', 'Oil filter', 'PF63E', 'AC Delco', '4.3L V6 EcoTec3 / 5.3L V8 EcoTec3 / 6.2L V8 EcoTec3', 'OEM AC Delco spin-on filter'),
(2015, 'Chevrolet', 'Silverado', 'Oil filter', 'PF63E', 'AC Delco', '4.3L V6 EcoTec3 / 5.3L V8 EcoTec3 / 6.2L V8 EcoTec3', 'OEM AC Delco spin-on filter'),
(2016, 'Chevrolet', 'Silverado', 'Oil filter', 'PF63E', 'AC Delco', '4.3L V6 EcoTec3 / 5.3L V8 EcoTec3 / 6.2L V8 EcoTec3', 'OEM AC Delco spin-on filter'),
(2017, 'Chevrolet', 'Silverado', 'Oil filter', 'PF63E', 'AC Delco', '4.3L V6 EcoTec3 / 5.3L V8 EcoTec3 / 6.2L V8 EcoTec3', 'OEM AC Delco spin-on filter'),
(2018, 'Chevrolet', 'Silverado', 'Oil filter', 'PF63E', 'AC Delco', '4.3L V6 EcoTec3 / 5.3L V8 EcoTec3 / 6.2L V8 EcoTec3', 'OEM AC Delco spin-on filter'),
(2019, 'Chevrolet', 'Silverado', 'Oil filter', 'PF63E', 'AC Delco', '2.7L I4 Turbo / 4.3L V6 / 5.3L V8 / 6.2L V8', 'OEM AC Delco spin-on filter'),
(2020, 'Chevrolet', 'Silverado', 'Oil filter', 'PF63E', 'AC Delco', '2.7L I4 Turbo / 4.3L V6 / 5.3L V8 / 6.2L V8', 'OEM AC Delco spin-on filter'),
(2021, 'Chevrolet', 'Silverado', 'Oil filter', 'PF63E', 'AC Delco', '2.7L I4 Turbo / 4.3L V6 / 5.3L V8 / 6.2L V8', 'OEM AC Delco spin-on filter'),
(2022, 'Chevrolet', 'Silverado', 'Oil filter', 'PF63E', 'AC Delco', '2.7L I4 Turbo / 4.3L V6 / 5.3L V8 / 6.2L V8', 'OEM AC Delco spin-on filter'),
(2023, 'Chevrolet', 'Silverado', 'Oil filter', 'PF63E', 'AC Delco', '2.7L I4 Turbo / 5.3L V8 / 6.2L V8', 'OEM AC Delco spin-on filter'),
(2024, 'Chevrolet', 'Silverado', 'Oil filter', 'PF63E', 'AC Delco', '2.7L I4 Turbo / 5.3L V8 / 6.2L V8', 'OEM AC Delco spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Malibu  (1997–2024)
-- ══════════════════════════════════════════════════════
(1997, 'Chevrolet', 'Malibu', 'Oil filter', 'PF46', 'AC Delco', '2.4L I4 / 3.1L V6', 'OEM AC Delco spin-on filter'),
(1998, 'Chevrolet', 'Malibu', 'Oil filter', 'PF46', 'AC Delco', '2.4L I4 / 3.1L V6', 'OEM AC Delco spin-on filter'),
(1999, 'Chevrolet', 'Malibu', 'Oil filter', 'PF46', 'AC Delco', '2.4L I4 / 3.1L V6', 'OEM AC Delco spin-on filter'),
(2000, 'Chevrolet', 'Malibu', 'Oil filter', 'PF46', 'AC Delco', '2.4L I4 / 3.1L V6', 'OEM AC Delco spin-on filter'),
(2001, 'Chevrolet', 'Malibu', 'Oil filter', 'PF46', 'AC Delco', '2.4L I4 / 3.1L V6', 'OEM AC Delco spin-on filter'),
(2002, 'Chevrolet', 'Malibu', 'Oil filter', 'PF46', 'AC Delco', '2.2L I4 / 3.1L V6', 'OEM AC Delco spin-on filter'),
(2003, 'Chevrolet', 'Malibu', 'Oil filter', 'PF46', 'AC Delco', '2.2L I4 / 3.1L V6', 'OEM AC Delco spin-on filter'),
(2004, 'Chevrolet', 'Malibu', 'Oil filter', 'PF52', 'AC Delco', '2.2L I4 / 3.5L V6', 'OEM AC Delco spin-on filter'),
(2005, 'Chevrolet', 'Malibu', 'Oil filter', 'PF52', 'AC Delco', '2.2L I4 / 3.5L V6', 'OEM AC Delco spin-on filter'),
(2006, 'Chevrolet', 'Malibu', 'Oil filter', 'PF52', 'AC Delco', '2.2L I4 / 3.5L V6', 'OEM AC Delco spin-on filter'),
(2007, 'Chevrolet', 'Malibu', 'Oil filter', 'PF52', 'AC Delco', '2.2L I4 / 3.5L V6', 'OEM AC Delco spin-on filter'),
(2008, 'Chevrolet', 'Malibu', 'Oil filter', 'PF52', 'AC Delco', '2.4L I4 / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2009, 'Chevrolet', 'Malibu', 'Oil filter', 'PF52', 'AC Delco', '2.4L I4 / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2010, 'Chevrolet', 'Malibu', 'Oil filter', 'PF52', 'AC Delco', '2.4L I4 / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2011, 'Chevrolet', 'Malibu', 'Oil filter', 'PF52', 'AC Delco', '2.4L I4 / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2012, 'Chevrolet', 'Malibu', 'Oil filter', 'PF52', 'AC Delco', '2.4L I4 / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2013, 'Chevrolet', 'Malibu', 'Oil filter', 'PF64', 'AC Delco', '2.0L I4 Turbo / 2.5L I4', 'OEM AC Delco spin-on filter'),
(2014, 'Chevrolet', 'Malibu', 'Oil filter', 'PF64', 'AC Delco', '2.0L I4 Turbo / 2.5L I4', 'OEM AC Delco spin-on filter'),
(2015, 'Chevrolet', 'Malibu', 'Oil filter', 'PF64', 'AC Delco', '2.0L I4 Turbo / 2.5L I4', 'OEM AC Delco spin-on filter'),
(2016, 'Chevrolet', 'Malibu', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2017, 'Chevrolet', 'Malibu', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2018, 'Chevrolet', 'Malibu', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2019, 'Chevrolet', 'Malibu', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2020, 'Chevrolet', 'Malibu', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2021, 'Chevrolet', 'Malibu', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2022, 'Chevrolet', 'Malibu', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2023, 'Chevrolet', 'Malibu', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2024, 'Chevrolet', 'Malibu', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo', 'OEM AC Delco spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Equinox  (2005–2024)
-- ══════════════════════════════════════════════════════
(2005, 'Chevrolet', 'Equinox', 'Oil filter', 'PF46', 'AC Delco', '3.4L V6', 'OEM AC Delco spin-on filter'),
(2006, 'Chevrolet', 'Equinox', 'Oil filter', 'PF46', 'AC Delco', '3.4L V6', 'OEM AC Delco spin-on filter'),
(2007, 'Chevrolet', 'Equinox', 'Oil filter', 'PF46', 'AC Delco', '3.4L V6', 'OEM AC Delco spin-on filter'),
(2008, 'Chevrolet', 'Equinox', 'Oil filter', 'PF46', 'AC Delco', '3.4L V6 / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2009, 'Chevrolet', 'Equinox', 'Oil filter', 'PF46', 'AC Delco', '3.4L V6 / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2010, 'Chevrolet', 'Equinox', 'Oil filter', 'PF48', 'AC Delco', '2.4L I4 / 3.0L V6', 'OEM AC Delco spin-on filter'),
(2011, 'Chevrolet', 'Equinox', 'Oil filter', 'PF48', 'AC Delco', '2.4L I4 / 3.0L V6', 'OEM AC Delco spin-on filter'),
(2012, 'Chevrolet', 'Equinox', 'Oil filter', 'PF48', 'AC Delco', '2.4L I4 / 3.0L V6', 'OEM AC Delco spin-on filter'),
(2013, 'Chevrolet', 'Equinox', 'Oil filter', 'PF48', 'AC Delco', '2.4L I4 / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2014, 'Chevrolet', 'Equinox', 'Oil filter', 'PF48', 'AC Delco', '2.4L I4 / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2015, 'Chevrolet', 'Equinox', 'Oil filter', 'PF48', 'AC Delco', '2.4L I4 / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2016, 'Chevrolet', 'Equinox', 'Oil filter', 'PF48', 'AC Delco', '2.4L I4 / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2017, 'Chevrolet', 'Equinox', 'Oil filter', 'PF48', 'AC Delco', '2.4L I4 / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2018, 'Chevrolet', 'Equinox', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2019, 'Chevrolet', 'Equinox', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2020, 'Chevrolet', 'Equinox', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2021, 'Chevrolet', 'Equinox', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2022, 'Chevrolet', 'Equinox', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2023, 'Chevrolet', 'Equinox', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),
(2024, 'Chevrolet', 'Equinox', 'Oil filter', 'PF64', 'AC Delco', '1.5L I4 Turbo / 2.0L I4 Turbo', 'OEM AC Delco spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Camaro  (1990–2002 F-body, 2010–2024 5th/6th gen)
-- Camaro was discontinued 2003–2009
-- ══════════════════════════════════════════════════════
(1990, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.1L V6 / 5.0L V8 / 5.7L V8', 'OEM AC Delco spin-on filter'),
(1991, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.1L V6 / 5.0L V8 / 5.7L V8', 'OEM AC Delco spin-on filter'),
(1992, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.1L V6 / 5.0L V8 / 5.7L V8', 'OEM AC Delco spin-on filter'),
(1993, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.4L V6 / 5.7L V8 LT1', 'OEM AC Delco spin-on filter'),
(1994, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.4L V6 / 5.7L V8 LT1', 'OEM AC Delco spin-on filter'),
(1995, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.4L V6 / 5.7L V8 LT1', 'OEM AC Delco spin-on filter'),
(1996, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.8L V6 / 5.7L V8 LT1', 'OEM AC Delco spin-on filter'),
(1997, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.8L V6 / 5.7L V8 LS1', 'OEM AC Delco spin-on filter'),
(1998, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.8L V6 / 5.7L V8 LS1', 'OEM AC Delco spin-on filter'),
(1999, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.8L V6 / 5.7L V8 LS1', 'OEM AC Delco spin-on filter'),
(2000, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.8L V6 / 5.7L V8 LS1', 'OEM AC Delco spin-on filter'),
(2001, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.8L V6 / 5.7L V8 LS1', 'OEM AC Delco spin-on filter'),
(2002, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.8L V6 / 5.7L V8 LS1', 'OEM AC Delco spin-on filter'),
-- 2003–2009: no Camaro produced
(2010, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 / 6.2L V8 LS3', 'OEM AC Delco spin-on filter'),
(2011, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 / 6.2L V8 LS3/LSA', 'OEM AC Delco spin-on filter'),
(2012, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 / 6.2L V8 LS3/LSA', 'OEM AC Delco spin-on filter'),
(2013, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 / 6.2L V8 LS3/LSA', 'OEM AC Delco spin-on filter'),
(2014, 'Chevrolet', 'Camaro', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 / 6.2L V8 LS3/LSA', 'OEM AC Delco spin-on filter'),
(2015, 'Chevrolet', 'Camaro', 'Oil filter', 'PF63E', 'AC Delco', '3.6L V6 / 6.2L V8 LS3/LSA', 'OEM AC Delco spin-on filter'),
(2016, 'Chevrolet', 'Camaro', 'Oil filter', 'PF63E', 'AC Delco', '2.0L I4 Turbo / 3.6L V6 / 6.2L V8 LT1', 'OEM AC Delco spin-on filter'),
(2017, 'Chevrolet', 'Camaro', 'Oil filter', 'PF63E', 'AC Delco', '2.0L I4 Turbo / 3.6L V6 / 6.2L V8 LT1', 'OEM AC Delco spin-on filter'),
(2018, 'Chevrolet', 'Camaro', 'Oil filter', 'PF63E', 'AC Delco', '2.0L I4 Turbo / 3.6L V6 / 6.2L V8 LT1', 'OEM AC Delco spin-on filter'),
(2019, 'Chevrolet', 'Camaro', 'Oil filter', 'PF63E', 'AC Delco', '2.0L I4 Turbo / 3.6L V6 / 6.2L V8 LT1', 'OEM AC Delco spin-on filter'),
(2020, 'Chevrolet', 'Camaro', 'Oil filter', 'PF63E', 'AC Delco', '2.0L I4 Turbo / 3.6L V6 / 6.2L V8 LT1', 'OEM AC Delco spin-on filter'),
(2021, 'Chevrolet', 'Camaro', 'Oil filter', 'PF63E', 'AC Delco', '2.0L I4 Turbo / 3.6L V6 / 6.2L V8 LT1', 'OEM AC Delco spin-on filter'),
(2022, 'Chevrolet', 'Camaro', 'Oil filter', 'PF63E', 'AC Delco', '2.0L I4 Turbo / 3.6L V6 / 6.2L V8 LT1', 'OEM AC Delco spin-on filter'),
(2023, 'Chevrolet', 'Camaro', 'Oil filter', 'PF63E', 'AC Delco', '2.0L I4 Turbo / 3.6L V6 / 6.2L V8 LT1', 'OEM AC Delco spin-on filter'),
(2024, 'Chevrolet', 'Camaro', 'Oil filter', 'PF63E', 'AC Delco', '2.0L I4 Turbo / 3.6L V6 / 6.2L V8 LT1', 'OEM AC Delco spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Traverse  (2009–2024)
-- ══════════════════════════════════════════════════════
(2009, 'Chevrolet', 'Traverse', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 LLT', 'OEM AC Delco spin-on filter'),
(2010, 'Chevrolet', 'Traverse', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 LLT', 'OEM AC Delco spin-on filter'),
(2011, 'Chevrolet', 'Traverse', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 LLT', 'OEM AC Delco spin-on filter'),
(2012, 'Chevrolet', 'Traverse', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 LLT', 'OEM AC Delco spin-on filter'),
(2013, 'Chevrolet', 'Traverse', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 LFX', 'OEM AC Delco spin-on filter'),
(2014, 'Chevrolet', 'Traverse', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 LFX', 'OEM AC Delco spin-on filter'),
(2015, 'Chevrolet', 'Traverse', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 LFX', 'OEM AC Delco spin-on filter'),
(2016, 'Chevrolet', 'Traverse', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 LFX', 'OEM AC Delco spin-on filter'),
(2017, 'Chevrolet', 'Traverse', 'Oil filter', 'PF48', 'AC Delco', '3.6L V6 LFX', 'OEM AC Delco spin-on filter'),
(2018, 'Chevrolet', 'Traverse', 'Oil filter', 'PF64', 'AC Delco', '2.0L I4 Turbo / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2019, 'Chevrolet', 'Traverse', 'Oil filter', 'PF64', 'AC Delco', '2.0L I4 Turbo / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2020, 'Chevrolet', 'Traverse', 'Oil filter', 'PF64', 'AC Delco', '2.0L I4 Turbo / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2021, 'Chevrolet', 'Traverse', 'Oil filter', 'PF64', 'AC Delco', '2.0L I4 Turbo / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2022, 'Chevrolet', 'Traverse', 'Oil filter', 'PF64', 'AC Delco', '2.0L I4 Turbo / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2023, 'Chevrolet', 'Traverse', 'Oil filter', 'PF64', 'AC Delco', '2.0L I4 Turbo / 3.6L V6', 'OEM AC Delco spin-on filter'),
(2024, 'Chevrolet', 'Traverse', 'Oil filter', 'PF64', 'AC Delco', '2.0L I4 Turbo / 3.6L V6', 'OEM AC Delco spin-on filter');
