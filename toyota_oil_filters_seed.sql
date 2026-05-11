-- Toyota OEM Oil Filter Part Numbers
-- Paste this into the Supabase SQL editor and click Run
--
-- Part number key:
--   90915-YZZB3  → 1990–2001 Toyota 4-cyl engines (1.6L/1.8L/2.2L)
--   90915-YZZA1  → 1990–2001 Toyota V6 engines (3.0L/3.4L) + early 2.4L
--   04152-YZZA1  → 2002–2010 Toyota 4-cyl/V6 engines
--   04152-YZZA2  → 2011–2024 Toyota modern engines (2.5L/3.5L/etc.)

INSERT INTO "Parts" (year, make, model, part_type, part_number, brand, engine, notes) VALUES

-- ══════════════════════════════════════════════════════
-- Camry  (1990–2001)
-- ══════════════════════════════════════════════════════
(1990, 'Toyota', 'Camry', 'Oil filter', '90915-YZZB3', 'Toyota', '2.0L I4 / 2.5L I4', 'OEM Toyota spin-on filter'),
(1991, 'Toyota', 'Camry', 'Oil filter', '90915-YZZB3', 'Toyota', '2.0L I4 / 2.5L I4', 'OEM Toyota spin-on filter'),
(1992, 'Toyota', 'Camry', 'Oil filter', '90915-YZZB3', 'Toyota', '2.2L I4 5S-FE', 'OEM Toyota spin-on filter'),
(1993, 'Toyota', 'Camry', 'Oil filter', '90915-YZZB3', 'Toyota', '2.2L I4 5S-FE', 'OEM Toyota spin-on filter'),
(1994, 'Toyota', 'Camry', 'Oil filter', '90915-YZZB3', 'Toyota', '2.2L I4 5S-FE', 'OEM Toyota spin-on filter'),
(1995, 'Toyota', 'Camry', 'Oil filter', '90915-YZZB3', 'Toyota', '2.2L I4 5S-FE / 3.0L V6 1MZ-FE', 'OEM Toyota spin-on filter'),
(1996, 'Toyota', 'Camry', 'Oil filter', '90915-YZZB3', 'Toyota', '2.2L I4 5S-FE / 3.0L V6 1MZ-FE', 'OEM Toyota spin-on filter'),
(1997, 'Toyota', 'Camry', 'Oil filter', '90915-YZZB3', 'Toyota', '2.2L I4 5S-FE / 3.0L V6 1MZ-FE', 'OEM Toyota spin-on filter'),
(1998, 'Toyota', 'Camry', 'Oil filter', '90915-YZZB3', 'Toyota', '2.2L I4 5S-FE / 3.0L V6 1MZ-FE', 'OEM Toyota spin-on filter'),
(1999, 'Toyota', 'Camry', 'Oil filter', '90915-YZZB3', 'Toyota', '2.2L I4 5S-FE / 3.0L V6 1MZ-FE', 'OEM Toyota spin-on filter'),
(2000, 'Toyota', 'Camry', 'Oil filter', '90915-YZZB3', 'Toyota', '2.2L I4 5S-FE / 3.0L V6 1MZ-FE', 'OEM Toyota spin-on filter'),
(2001, 'Toyota', 'Camry', 'Oil filter', '90915-YZZB3', 'Toyota', '2.4L I4 2AZ-FE / 3.0L V6 1MZ-FE', 'OEM Toyota spin-on filter'),

-- Camry  (2002–2010)
(2002, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.0L V6 1MZ-FE', 'OEM Toyota spin-on filter'),
(2003, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.0L V6 1MZ-FE', 'OEM Toyota spin-on filter'),
(2004, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.3L V6 3MZ-FE', 'OEM Toyota spin-on filter'),
(2005, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.3L V6 3MZ-FE', 'OEM Toyota spin-on filter'),
(2006, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.3L V6 3MZ-FE', 'OEM Toyota spin-on filter'),
(2007, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2008, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2009, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2010, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA1', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),

-- Camry  (2011–2024)
(2011, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2012, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2013, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2014, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2015, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2016, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2017, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2018, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 A25A-FKS / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2019, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 A25A-FKS / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2020, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 A25A-FKS / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2021, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 A25A-FKS / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2022, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 A25A-FKS / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2023, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 A25A-FKS / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2024, 'Toyota', 'Camry', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 A25A-FKS / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Corolla  (1990–2001)
-- ══════════════════════════════════════════════════════
(1990, 'Toyota', 'Corolla', 'Oil filter', '90915-YZZB3', 'Toyota', '1.6L I4 4A-FE', 'OEM Toyota spin-on filter'),
(1991, 'Toyota', 'Corolla', 'Oil filter', '90915-YZZB3', 'Toyota', '1.6L I4 4A-FE', 'OEM Toyota spin-on filter'),
(1992, 'Toyota', 'Corolla', 'Oil filter', '90915-YZZB3', 'Toyota', '1.6L I4 4A-FE', 'OEM Toyota spin-on filter'),
(1993, 'Toyota', 'Corolla', 'Oil filter', '90915-YZZB3', 'Toyota', '1.6L I4 4A-FE / 1.8L I4 7A-FE', 'OEM Toyota spin-on filter'),
(1994, 'Toyota', 'Corolla', 'Oil filter', '90915-YZZB3', 'Toyota', '1.8L I4 7A-FE', 'OEM Toyota spin-on filter'),
(1995, 'Toyota', 'Corolla', 'Oil filter', '90915-YZZB3', 'Toyota', '1.8L I4 7A-FE', 'OEM Toyota spin-on filter'),
(1996, 'Toyota', 'Corolla', 'Oil filter', '90915-YZZB3', 'Toyota', '1.8L I4 7A-FE', 'OEM Toyota spin-on filter'),
(1997, 'Toyota', 'Corolla', 'Oil filter', '90915-YZZB3', 'Toyota', '1.8L I4 7A-FE', 'OEM Toyota spin-on filter'),
(1998, 'Toyota', 'Corolla', 'Oil filter', '90915-YZZB3', 'Toyota', '1.8L I4 1ZZ-FE', 'OEM Toyota spin-on filter'),
(1999, 'Toyota', 'Corolla', 'Oil filter', '90915-YZZB3', 'Toyota', '1.8L I4 1ZZ-FE', 'OEM Toyota spin-on filter'),
(2000, 'Toyota', 'Corolla', 'Oil filter', '90915-YZZB3', 'Toyota', '1.8L I4 1ZZ-FE', 'OEM Toyota spin-on filter'),
(2001, 'Toyota', 'Corolla', 'Oil filter', '90915-YZZB3', 'Toyota', '1.8L I4 1ZZ-FE', 'OEM Toyota spin-on filter'),

-- Corolla  (2002–2013)
(2002, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA1', 'Toyota', '1.8L I4 1ZZ-FE', 'OEM Toyota spin-on filter'),
(2003, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA1', 'Toyota', '1.8L I4 1ZZ-FE', 'OEM Toyota spin-on filter'),
(2004, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA1', 'Toyota', '1.8L I4 1ZZ-FE', 'OEM Toyota spin-on filter'),
(2005, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA1', 'Toyota', '1.8L I4 1ZZ-FE', 'OEM Toyota spin-on filter'),
(2006, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA1', 'Toyota', '1.8L I4 1ZZ-FE', 'OEM Toyota spin-on filter'),
(2007, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA1', 'Toyota', '1.8L I4 1ZZ-FE', 'OEM Toyota spin-on filter'),
(2008, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA1', 'Toyota', '1.8L I4 2ZR-FE', 'OEM Toyota spin-on filter'),
(2009, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA1', 'Toyota', '1.8L I4 2ZR-FE', 'OEM Toyota spin-on filter'),
(2010, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA1', 'Toyota', '1.8L I4 2ZR-FE', 'OEM Toyota spin-on filter'),
(2011, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA1', 'Toyota', '1.8L I4 2ZR-FE', 'OEM Toyota spin-on filter'),
(2012, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA1', 'Toyota', '1.8L I4 2ZR-FE', 'OEM Toyota spin-on filter'),
(2013, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA1', 'Toyota', '1.8L I4 2ZR-FE', 'OEM Toyota spin-on filter'),

-- Corolla  (2014–2024)
(2014, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA2', 'Toyota', '1.8L I4 2ZR-FAE', 'OEM Toyota spin-on filter'),
(2015, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA2', 'Toyota', '1.8L I4 2ZR-FAE', 'OEM Toyota spin-on filter'),
(2016, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA2', 'Toyota', '1.8L I4 2ZR-FAE', 'OEM Toyota spin-on filter'),
(2017, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA2', 'Toyota', '1.8L I4 2ZR-FAE', 'OEM Toyota spin-on filter'),
(2018, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA2', 'Toyota', '1.8L I4 2ZR-FAE', 'OEM Toyota spin-on filter'),
(2019, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA2', 'Toyota', '2.0L I4 M20A-FKS / 1.8L I4 2ZR-FAE', 'OEM Toyota spin-on filter'),
(2020, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA2', 'Toyota', '2.0L I4 M20A-FKS / 1.8L I4 2ZR-FAE', 'OEM Toyota spin-on filter'),
(2021, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA2', 'Toyota', '2.0L I4 M20A-FKS / 1.8L I4 2ZR-FAE', 'OEM Toyota spin-on filter'),
(2022, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA2', 'Toyota', '2.0L I4 M20A-FKS / 1.8L I4 2ZR-FAE', 'OEM Toyota spin-on filter'),
(2023, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA2', 'Toyota', '2.0L I4 M20A-FKS / 1.8L I4 2ZR-FAE', 'OEM Toyota spin-on filter'),
(2024, 'Toyota', 'Corolla', 'Oil filter', '04152-YZZA2', 'Toyota', '2.0L I4 M20A-FKS / 1.8L I4 2ZR-FAE', 'OEM Toyota spin-on filter'),

-- ══════════════════════════════════════════════════════
-- RAV4  (1996–2024)
-- ══════════════════════════════════════════════════════
(1996, 'Toyota', 'RAV4', 'Oil filter', '90915-YZZB3', 'Toyota', '2.0L I4 3S-FE', 'OEM Toyota spin-on filter'),
(1997, 'Toyota', 'RAV4', 'Oil filter', '90915-YZZB3', 'Toyota', '2.0L I4 3S-FE', 'OEM Toyota spin-on filter'),
(1998, 'Toyota', 'RAV4', 'Oil filter', '90915-YZZB3', 'Toyota', '2.0L I4 3S-FE', 'OEM Toyota spin-on filter'),
(1999, 'Toyota', 'RAV4', 'Oil filter', '90915-YZZB3', 'Toyota', '2.0L I4 3S-FE', 'OEM Toyota spin-on filter'),
(2000, 'Toyota', 'RAV4', 'Oil filter', '90915-YZZB3', 'Toyota', '2.0L I4 3S-FE', 'OEM Toyota spin-on filter'),
(2001, 'Toyota', 'RAV4', 'Oil filter', '90915-YZZB3', 'Toyota', '2.0L I4 1AZ-FE', 'OEM Toyota spin-on filter'),
(2002, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA1', 'Toyota', '2.0L I4 1AZ-FE', 'OEM Toyota spin-on filter'),
(2003, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE', 'OEM Toyota spin-on filter'),
(2004, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE', 'OEM Toyota spin-on filter'),
(2005, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE', 'OEM Toyota spin-on filter'),
(2006, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2007, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2008, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2009, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA1', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2010, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA1', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2011, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2012, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2013, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2014, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2015, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2016, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2017, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2018, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 2AR-FE', 'OEM Toyota spin-on filter'),
(2019, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 A25A-FKS / Hybrid 2.5L', 'OEM Toyota spin-on filter'),
(2020, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 A25A-FKS / Hybrid 2.5L', 'OEM Toyota spin-on filter'),
(2021, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 A25A-FKS / Hybrid 2.5L / 2.5L Prime PHEV', 'OEM Toyota spin-on filter'),
(2022, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 A25A-FKS / Hybrid 2.5L / 2.5L Prime PHEV', 'OEM Toyota spin-on filter'),
(2023, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 A25A-FKS / Hybrid 2.5L', 'OEM Toyota spin-on filter'),
(2024, 'Toyota', 'RAV4', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L I4 A25A-FKS / Hybrid 2.5L', 'OEM Toyota spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Tacoma  (1995–2024)
-- ══════════════════════════════════════════════════════
(1995, 'Toyota', 'Tacoma', 'Oil filter', '90915-YZZB3', 'Toyota', '2.4L I4 2RZ-FE / 2.7L I4 3RZ-FE', 'OEM Toyota spin-on filter'),
(1996, 'Toyota', 'Tacoma', 'Oil filter', '90915-YZZB3', 'Toyota', '2.4L I4 2RZ-FE / 2.7L I4 3RZ-FE / 3.4L V6 5VZ-FE', 'OEM Toyota spin-on filter'),
(1997, 'Toyota', 'Tacoma', 'Oil filter', '90915-YZZB3', 'Toyota', '2.4L I4 2RZ-FE / 2.7L I4 3RZ-FE / 3.4L V6 5VZ-FE', 'OEM Toyota spin-on filter'),
(1998, 'Toyota', 'Tacoma', 'Oil filter', '90915-YZZB3', 'Toyota', '2.4L I4 2RZ-FE / 2.7L I4 3RZ-FE / 3.4L V6 5VZ-FE', 'OEM Toyota spin-on filter'),
(1999, 'Toyota', 'Tacoma', 'Oil filter', '90915-YZZB3', 'Toyota', '2.4L I4 2RZ-FE / 2.7L I4 3RZ-FE / 3.4L V6 5VZ-FE', 'OEM Toyota spin-on filter'),
(2000, 'Toyota', 'Tacoma', 'Oil filter', '90915-YZZB3', 'Toyota', '2.4L I4 2RZ-FE / 2.7L I4 3RZ-FE / 3.4L V6 5VZ-FE', 'OEM Toyota spin-on filter'),
(2001, 'Toyota', 'Tacoma', 'Oil filter', '90915-YZZB3', 'Toyota', '2.4L I4 2RZ-FE / 2.7L I4 3RZ-FE / 3.4L V6 5VZ-FE', 'OEM Toyota spin-on filter'),
(2002, 'Toyota', 'Tacoma', 'Oil filter', '90915-YZZB3', 'Toyota', '2.4L I4 2RZ-FE / 2.7L I4 3RZ-FE / 3.4L V6 5VZ-FE', 'OEM Toyota spin-on filter'),
(2003, 'Toyota', 'Tacoma', 'Oil filter', '90915-YZZB3', 'Toyota', '2.4L I4 2RZ-FE / 2.7L I4 3RZ-FE / 3.4L V6 5VZ-FE', 'OEM Toyota spin-on filter'),
(2004, 'Toyota', 'Tacoma', 'Oil filter', '90915-YZZB3', 'Toyota', '2.4L I4 2RZ-FE / 2.7L I4 3RZ-FE / 3.4L V6 5VZ-FE', 'OEM Toyota spin-on filter'),

-- Tacoma  (2005–2015)
(2005, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 2TR-FE / 4.0L V6 1GR-FE', 'OEM Toyota spin-on filter'),
(2006, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 2TR-FE / 4.0L V6 1GR-FE', 'OEM Toyota spin-on filter'),
(2007, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 2TR-FE / 4.0L V6 1GR-FE', 'OEM Toyota spin-on filter'),
(2008, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 2TR-FE / 4.0L V6 1GR-FE', 'OEM Toyota spin-on filter'),
(2009, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 2TR-FE / 4.0L V6 1GR-FE', 'OEM Toyota spin-on filter'),
(2010, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 2TR-FE / 4.0L V6 1GR-FE', 'OEM Toyota spin-on filter'),
(2011, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 2TR-FE / 4.0L V6 1GR-FE', 'OEM Toyota spin-on filter'),
(2012, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 2TR-FE / 4.0L V6 1GR-FE', 'OEM Toyota spin-on filter'),
(2013, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 2TR-FE / 4.0L V6 1GR-FE', 'OEM Toyota spin-on filter'),
(2014, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 2TR-FE / 4.0L V6 1GR-FE', 'OEM Toyota spin-on filter'),
(2015, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 2TR-FE / 4.0L V6 1GR-FE', 'OEM Toyota spin-on filter'),

-- Tacoma  (2016–2024)
(2016, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 2TR-FE / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2017, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 2TR-FE / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2018, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 2TR-FE / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2019, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 2TR-FE / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2020, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 2TR-FE / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2021, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 2TR-FE / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2022, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 2TR-FE / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2023, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 2TR-FE / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2024, 'Toyota', 'Tacoma', 'Oil filter', '04152-YZZA2', 'Toyota', '2.4L I4 Turbo 1GD-FTV / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Highlander  (2001–2024)
-- ══════════════════════════════════════════════════════
(2001, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.0L V6 1MZ-FE', 'OEM Toyota spin-on filter'),
(2002, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.0L V6 1MZ-FE', 'OEM Toyota spin-on filter'),
(2003, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.0L V6 1MZ-FE', 'OEM Toyota spin-on filter'),
(2004, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.3L V6 3MZ-FE', 'OEM Toyota spin-on filter'),
(2005, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.3L V6 3MZ-FE', 'OEM Toyota spin-on filter'),
(2006, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.3L V6 3MZ-FE', 'OEM Toyota spin-on filter'),
(2007, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA1', 'Toyota', '2.4L I4 2AZ-FE / 3.3L V6 3MZ-FE', 'OEM Toyota spin-on filter'),
(2008, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 1AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2009, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 1AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2010, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA1', 'Toyota', '2.7L I4 1AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2011, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 1AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2012, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 1AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2013, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 1AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2014, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 1AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2015, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 1AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2016, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 1AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2017, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 1AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2018, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 1AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2019, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.7L I4 1AR-FE / 3.5L V6 2GR-FE', 'OEM Toyota spin-on filter'),
(2020, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L Hybrid / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2021, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L Hybrid / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2022, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L Hybrid / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2023, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L Hybrid / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter'),
(2024, 'Toyota', 'Highlander', 'Oil filter', '04152-YZZA2', 'Toyota', '2.5L Hybrid / 3.5L V6 2GR-FKS', 'OEM Toyota spin-on filter');
