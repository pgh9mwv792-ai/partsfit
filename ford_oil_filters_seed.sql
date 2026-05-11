-- Ford OEM (Motorcraft) Oil Filter Part Numbers
-- Paste this into the Supabase SQL editor and click Run
--
-- Part number key:
--   FL-1A    → 1990–1996 Ford V8/I6 engines (Fox body era)
--   FL-820S  → 1997–2010 Ford V6/V8 engines
--   FL-500S  → 2011–2024 Ford EcoBoost and modern V8 engines

INSERT INTO "Parts" (year, make, model, part_type, part_number, brand, engine, notes) VALUES

-- ══════════════════════════════════════════════════════
-- F-150  (1990–1996 → FL-1A)
-- ══════════════════════════════════════════════════════
(1990, 'Ford', 'F-150', 'Oil filter', 'FL-1A', 'Motorcraft', '4.9L I6 / 5.0L V8 / 5.8L V8', 'OEM Motorcraft canister filter'),
(1991, 'Ford', 'F-150', 'Oil filter', 'FL-1A', 'Motorcraft', '4.9L I6 / 5.0L V8 / 5.8L V8', 'OEM Motorcraft canister filter'),
(1992, 'Ford', 'F-150', 'Oil filter', 'FL-1A', 'Motorcraft', '4.9L I6 / 5.0L V8 / 5.8L V8', 'OEM Motorcraft canister filter'),
(1993, 'Ford', 'F-150', 'Oil filter', 'FL-1A', 'Motorcraft', '4.9L I6 / 5.0L V8 / 5.8L V8', 'OEM Motorcraft canister filter'),
(1994, 'Ford', 'F-150', 'Oil filter', 'FL-1A', 'Motorcraft', '4.9L I6 / 5.0L V8 / 5.8L V8', 'OEM Motorcraft canister filter'),
(1995, 'Ford', 'F-150', 'Oil filter', 'FL-1A', 'Motorcraft', '4.9L I6 / 5.0L V8 / 5.8L V8', 'OEM Motorcraft canister filter'),
(1996, 'Ford', 'F-150', 'Oil filter', 'FL-1A', 'Motorcraft', '4.9L I6 / 5.0L V8 / 5.8L V8', 'OEM Motorcraft canister filter'),

-- F-150  (1997–2010 → FL-820S)
(1997, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.2L V6 / 4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(1998, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.2L V6 / 4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(1999, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.2L V6 / 4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(2000, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.2L V6 / 4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(2001, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.2L V6 / 4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(2002, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.2L V6 / 4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(2003, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.2L V6 / 4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(2004, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(2005, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(2006, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(2007, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.2L V6 / 4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(2008, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.2L V6 / 4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(2009, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(2010, 'Ford', 'F-150', 'Oil filter', 'FL-820S', 'Motorcraft', '4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),

-- F-150  (2011–2024 → FL-500S)
(2011, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '3.5L EcoBoost / 5.0L V8 / 6.2L V8', 'OEM Motorcraft spin-on filter'),
(2012, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '3.5L EcoBoost / 5.0L V8 / 6.2L V8', 'OEM Motorcraft spin-on filter'),
(2013, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '3.5L EcoBoost / 5.0L V8 / 6.2L V8', 'OEM Motorcraft spin-on filter'),
(2014, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '3.5L EcoBoost / 5.0L V8 / 6.2L V8', 'OEM Motorcraft spin-on filter'),
(2015, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '2.7L EcoBoost / 3.5L EcoBoost / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2016, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '2.7L EcoBoost / 3.5L EcoBoost / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2017, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '2.7L EcoBoost / 3.5L EcoBoost / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2018, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '2.7L EcoBoost / 3.5L EcoBoost / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2019, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '2.7L EcoBoost / 3.5L EcoBoost / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2020, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '2.7L EcoBoost / 3.5L EcoBoost / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2021, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '2.7L EcoBoost / 3.5L EcoBoost / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2022, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '2.7L EcoBoost / 3.5L EcoBoost / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2023, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '2.7L EcoBoost / 3.5L EcoBoost / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2024, 'Ford', 'F-150', 'Oil filter', 'FL-500S', 'Motorcraft', '2.7L EcoBoost / 3.5L EcoBoost / 5.0L V8', 'OEM Motorcraft spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Mustang  (1990–1995 → FL-1A)
-- ══════════════════════════════════════════════════════
(1990, 'Ford', 'Mustang', 'Oil filter', 'FL-1A', 'Motorcraft', '2.3L I4 / 5.0L V8', 'OEM Motorcraft canister filter'),
(1991, 'Ford', 'Mustang', 'Oil filter', 'FL-1A', 'Motorcraft', '2.3L I4 / 5.0L V8', 'OEM Motorcraft canister filter'),
(1992, 'Ford', 'Mustang', 'Oil filter', 'FL-1A', 'Motorcraft', '2.3L I4 / 5.0L V8', 'OEM Motorcraft canister filter'),
(1993, 'Ford', 'Mustang', 'Oil filter', 'FL-1A', 'Motorcraft', '2.3L I4 / 5.0L V8', 'OEM Motorcraft canister filter'),
(1994, 'Ford', 'Mustang', 'Oil filter', 'FL-1A', 'Motorcraft', '3.8L V6 / 5.0L V8', 'OEM Motorcraft canister filter'),
(1995, 'Ford', 'Mustang', 'Oil filter', 'FL-1A', 'Motorcraft', '3.8L V6 / 5.0L V8', 'OEM Motorcraft canister filter'),

-- Mustang  (1996–2010 → FL-820S)
(1996, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '3.8L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(1997, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '3.8L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(1998, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '3.8L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(1999, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '3.8L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2000, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '3.8L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2001, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '3.8L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2002, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '3.8L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2003, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '3.8L V6 / 4.6L V8 Cobra', 'OEM Motorcraft spin-on filter'),
(2004, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '3.9L V6 / 4.6L V8 Cobra', 'OEM Motorcraft spin-on filter'),
(2005, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2006, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2007, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2008, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8 / 5.4L V8', 'OEM Motorcraft spin-on filter'),
(2009, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2010, 'Ford', 'Mustang', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),

-- Mustang  (2011–2024 → FL-500S)
(2011, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '3.7L V6 / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2012, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '3.7L V6 / 5.0L V8 / 5.8L V8', 'OEM Motorcraft spin-on filter'),
(2013, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '3.7L V6 / 5.0L V8 / 5.8L V8', 'OEM Motorcraft spin-on filter'),
(2014, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '3.7L V6 / 5.0L V8 / 5.8L V8', 'OEM Motorcraft spin-on filter'),
(2015, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 3.7L V6 / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2016, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 3.7L V6 / 5.0L V8 / 5.2L V8', 'OEM Motorcraft spin-on filter'),
(2017, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 3.7L V6 / 5.0L V8 / 5.2L V8', 'OEM Motorcraft spin-on filter'),
(2018, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 5.0L V8 / 5.2L V8', 'OEM Motorcraft spin-on filter'),
(2019, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 5.0L V8 / 5.2L V8', 'OEM Motorcraft spin-on filter'),
(2020, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 5.0L V8 / 5.2L V8', 'OEM Motorcraft spin-on filter'),
(2021, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 5.0L V8 / 5.2L V8', 'OEM Motorcraft spin-on filter'),
(2022, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 5.0L V8 / 5.2L V8', 'OEM Motorcraft spin-on filter'),
(2023, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 5.0L V8 / 5.2L V8', 'OEM Motorcraft spin-on filter'),
(2024, 'Ford', 'Mustang', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 5.0L V8 / 5.2L V8', 'OEM Motorcraft spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Explorer  (1990–2010 → FL-820S)
-- ══════════════════════════════════════════════════════
(1990, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6', 'OEM Motorcraft spin-on filter'),
(1991, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6', 'OEM Motorcraft spin-on filter'),
(1992, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6', 'OEM Motorcraft spin-on filter'),
(1993, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6', 'OEM Motorcraft spin-on filter'),
(1994, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6', 'OEM Motorcraft spin-on filter'),
(1995, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(1996, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(1997, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(1998, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L SOHC V6 / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(1999, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L SOHC V6 / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2000, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L SOHC V6 / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2001, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L SOHC V6 / 5.0L V8', 'OEM Motorcraft spin-on filter'),
(2002, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2003, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2004, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2005, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2006, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2007, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2008, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2009, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),
(2010, 'Ford', 'Explorer', 'Oil filter', 'FL-820S', 'Motorcraft', '4.0L V6 / 4.6L V8', 'OEM Motorcraft spin-on filter'),

-- Explorer  (2011–2024 → FL-500S)
(2011, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '3.5L V6 / 3.5L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2012, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '2.0L EcoBoost / 3.5L V6 / 3.5L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2013, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '2.0L EcoBoost / 3.5L V6 / 3.5L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2014, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '2.0L EcoBoost / 3.5L V6 / 3.5L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2015, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 3.5L V6 / 3.5L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2016, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 3.5L V6 / 3.5L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2017, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 3.5L V6 / 3.5L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2018, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 3.5L V6 / 3.5L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2019, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 3.5L V6 / 3.5L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2020, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 3.0L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2021, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 3.0L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2022, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 3.0L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2023, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 3.0L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2024, 'Ford', 'Explorer', 'Oil filter', 'FL-500S', 'Motorcraft', '2.3L EcoBoost / 3.0L EcoBoost', 'OEM Motorcraft spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Escape  (2001–2012 → FL-820S)
-- ══════════════════════════════════════════════════════
(2001, 'Ford', 'Escape', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4 / 3.0L V6', 'OEM Motorcraft spin-on filter'),
(2002, 'Ford', 'Escape', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4 / 3.0L V6', 'OEM Motorcraft spin-on filter'),
(2003, 'Ford', 'Escape', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4 / 3.0L V6', 'OEM Motorcraft spin-on filter'),
(2004, 'Ford', 'Escape', 'Oil filter', 'FL-820S', 'Motorcraft', '2.3L I4 / 3.0L V6', 'OEM Motorcraft spin-on filter'),
(2005, 'Ford', 'Escape', 'Oil filter', 'FL-820S', 'Motorcraft', '2.3L I4 / 3.0L V6', 'OEM Motorcraft spin-on filter'),
(2006, 'Ford', 'Escape', 'Oil filter', 'FL-820S', 'Motorcraft', '2.3L I4 / 3.0L V6', 'OEM Motorcraft spin-on filter'),
(2007, 'Ford', 'Escape', 'Oil filter', 'FL-820S', 'Motorcraft', '2.3L I4 / 3.0L V6', 'OEM Motorcraft spin-on filter'),
(2008, 'Ford', 'Escape', 'Oil filter', 'FL-820S', 'Motorcraft', '2.5L I4 / 3.0L V6', 'OEM Motorcraft spin-on filter'),
(2009, 'Ford', 'Escape', 'Oil filter', 'FL-820S', 'Motorcraft', '2.5L I4 / 3.0L V6', 'OEM Motorcraft spin-on filter'),
(2010, 'Ford', 'Escape', 'Oil filter', 'FL-820S', 'Motorcraft', '2.5L I4 / 3.0L V6', 'OEM Motorcraft spin-on filter'),
(2011, 'Ford', 'Escape', 'Oil filter', 'FL-820S', 'Motorcraft', '2.5L I4 / 3.0L V6', 'OEM Motorcraft spin-on filter'),
(2012, 'Ford', 'Escape', 'Oil filter', 'FL-820S', 'Motorcraft', '2.5L I4 / 3.0L V6', 'OEM Motorcraft spin-on filter'),

-- Escape  (2013–2024 → FL-500S)
(2013, 'Ford', 'Escape', 'Oil filter', 'FL-500S', 'Motorcraft', '1.6L EcoBoost / 2.0L EcoBoost / 2.5L I4', 'OEM Motorcraft spin-on filter'),
(2014, 'Ford', 'Escape', 'Oil filter', 'FL-500S', 'Motorcraft', '1.6L EcoBoost / 2.0L EcoBoost / 2.5L I4', 'OEM Motorcraft spin-on filter'),
(2015, 'Ford', 'Escape', 'Oil filter', 'FL-500S', 'Motorcraft', '1.5L EcoBoost / 2.0L EcoBoost / 2.5L I4', 'OEM Motorcraft spin-on filter'),
(2016, 'Ford', 'Escape', 'Oil filter', 'FL-500S', 'Motorcraft', '1.5L EcoBoost / 2.0L EcoBoost / 2.5L I4', 'OEM Motorcraft spin-on filter'),
(2017, 'Ford', 'Escape', 'Oil filter', 'FL-500S', 'Motorcraft', '1.5L EcoBoost / 2.0L EcoBoost / 2.5L I4', 'OEM Motorcraft spin-on filter'),
(2018, 'Ford', 'Escape', 'Oil filter', 'FL-500S', 'Motorcraft', '1.5L EcoBoost / 2.0L EcoBoost / 2.5L I4', 'OEM Motorcraft spin-on filter'),
(2019, 'Ford', 'Escape', 'Oil filter', 'FL-500S', 'Motorcraft', '1.5L EcoBoost / 2.0L EcoBoost / 2.5L I4', 'OEM Motorcraft spin-on filter'),
(2020, 'Ford', 'Escape', 'Oil filter', 'FL-500S', 'Motorcraft', '1.5L EcoBoost / 2.0L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2021, 'Ford', 'Escape', 'Oil filter', 'FL-500S', 'Motorcraft', '1.5L EcoBoost / 2.0L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2022, 'Ford', 'Escape', 'Oil filter', 'FL-500S', 'Motorcraft', '1.5L EcoBoost / 2.0L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2023, 'Ford', 'Escape', 'Oil filter', 'FL-500S', 'Motorcraft', '1.5L EcoBoost / 2.0L EcoBoost', 'OEM Motorcraft spin-on filter'),
(2024, 'Ford', 'Escape', 'Oil filter', 'FL-500S', 'Motorcraft', '1.5L EcoBoost / 2.0L EcoBoost', 'OEM Motorcraft spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Focus  (2000–2011 → FL-820S)
-- ══════════════════════════════════════════════════════
(2000, 'Ford', 'Focus', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4 SOHC / DOHC', 'OEM Motorcraft spin-on filter'),
(2001, 'Ford', 'Focus', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4 SOHC / DOHC', 'OEM Motorcraft spin-on filter'),
(2002, 'Ford', 'Focus', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4 SOHC / DOHC', 'OEM Motorcraft spin-on filter'),
(2003, 'Ford', 'Focus', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4 SOHC / DOHC', 'OEM Motorcraft spin-on filter'),
(2004, 'Ford', 'Focus', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4 SOHC / DOHC', 'OEM Motorcraft spin-on filter'),
(2005, 'Ford', 'Focus', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4 / 2.3L I4', 'OEM Motorcraft spin-on filter'),
(2006, 'Ford', 'Focus', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4 / 2.3L I4', 'OEM Motorcraft spin-on filter'),
(2007, 'Ford', 'Focus', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4 / 2.3L I4', 'OEM Motorcraft spin-on filter'),
(2008, 'Ford', 'Focus', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4', 'OEM Motorcraft spin-on filter'),
(2009, 'Ford', 'Focus', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4', 'OEM Motorcraft spin-on filter'),
(2010, 'Ford', 'Focus', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4', 'OEM Motorcraft spin-on filter'),
(2011, 'Ford', 'Focus', 'Oil filter', 'FL-820S', 'Motorcraft', '2.0L I4', 'OEM Motorcraft spin-on filter'),

-- Focus  (2012–2018 → FL-500S)
(2012, 'Ford', 'Focus', 'Oil filter', 'FL-500S', 'Motorcraft', '1.0L EcoBoost / 2.0L I4', 'OEM Motorcraft spin-on filter'),
(2013, 'Ford', 'Focus', 'Oil filter', 'FL-500S', 'Motorcraft', '1.0L EcoBoost / 2.0L I4', 'OEM Motorcraft spin-on filter'),
(2014, 'Ford', 'Focus', 'Oil filter', 'FL-500S', 'Motorcraft', '1.0L EcoBoost / 2.0L I4', 'OEM Motorcraft spin-on filter'),
(2015, 'Ford', 'Focus', 'Oil filter', 'FL-500S', 'Motorcraft', '1.0L EcoBoost / 2.0L I4 / 2.3L EcoBoost ST', 'OEM Motorcraft spin-on filter'),
(2016, 'Ford', 'Focus', 'Oil filter', 'FL-500S', 'Motorcraft', '1.0L EcoBoost / 2.0L I4 / 2.3L EcoBoost ST', 'OEM Motorcraft spin-on filter'),
(2017, 'Ford', 'Focus', 'Oil filter', 'FL-500S', 'Motorcraft', '1.0L EcoBoost / 2.0L I4 / 2.3L EcoBoost ST', 'OEM Motorcraft spin-on filter'),
(2018, 'Ford', 'Focus', 'Oil filter', 'FL-500S', 'Motorcraft', '1.0L EcoBoost / 2.0L I4', 'OEM Motorcraft spin-on filter');
