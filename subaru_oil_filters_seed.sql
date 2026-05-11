-- Subaru OEM Oil Filter Part Numbers
-- Paste this into the Supabase SQL editor and click Run
--
-- Part number key:
--   15208-AA100 → 1993–2011 Subaru EJ-series engines (EJ22/EJ25/EJ20)
--   15208-AA160 → 2012–2024 Subaru FB/FA-series engines (FB20/FB25/FA20/FA24)

INSERT INTO "Parts" (year, make, model, part_type, part_number, brand, engine, notes) VALUES

-- ══════════════════════════════════════════════════════
-- Outback  (1995–2024)
-- ══════════════════════════════════════════════════════
(1995, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.2L H4 EJ22E', 'OEM Subaru spin-on filter'),
(1996, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ25D', 'OEM Subaru spin-on filter'),
(1997, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ25D', 'OEM Subaru spin-on filter'),
(1998, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ25D / 3.0L H6 EZ30', 'OEM Subaru spin-on filter'),
(1999, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ25D / 3.0L H6 EZ30', 'OEM Subaru spin-on filter'),
(2000, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ251 / 3.0L H6 EZ30', 'OEM Subaru spin-on filter'),
(2001, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ251 / 3.0L H6 EZ30', 'OEM Subaru spin-on filter'),
(2002, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ251 / 3.0L H6 EZ30', 'OEM Subaru spin-on filter'),
(2003, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ251 / 3.0L H6 EZ30', 'OEM Subaru spin-on filter'),
(2004, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ251 / 3.0L H6 EZ30', 'OEM Subaru spin-on filter'),
(2005, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 3.0L H6 EZ30', 'OEM Subaru spin-on filter'),
(2006, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 3.0L H6 EZ30', 'OEM Subaru spin-on filter'),
(2007, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 3.0L H6 EZ30', 'OEM Subaru spin-on filter'),
(2008, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 3.0L H6 EZ30', 'OEM Subaru spin-on filter'),
(2009, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 3.0L H6 EZ30', 'OEM Subaru spin-on filter'),
(2010, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 3.6L H6 EZ36', 'OEM Subaru spin-on filter'),
(2011, 'Subaru', 'Outback', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 3.6L H6 EZ36', 'OEM Subaru spin-on filter'),
(2012, 'Subaru', 'Outback', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 3.6L H6 EZ36', 'OEM Subaru spin-on filter'),
(2013, 'Subaru', 'Outback', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 3.6L H6 EZ36', 'OEM Subaru spin-on filter'),
(2014, 'Subaru', 'Outback', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 3.6L H6 EZ36', 'OEM Subaru spin-on filter'),
(2015, 'Subaru', 'Outback', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 3.6L H6 EZ36', 'OEM Subaru spin-on filter'),
(2016, 'Subaru', 'Outback', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 3.6L H6 EZ36', 'OEM Subaru spin-on filter'),
(2017, 'Subaru', 'Outback', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 3.6L H6 EZ36', 'OEM Subaru spin-on filter'),
(2018, 'Subaru', 'Outback', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 3.6L H6 EZ36', 'OEM Subaru spin-on filter'),
(2019, 'Subaru', 'Outback', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 3.6L H6 EZ36', 'OEM Subaru spin-on filter'),
(2020, 'Subaru', 'Outback', 'Oil filter', '15208-AA160', 'Subaru', '2.4L H4 Turbo FA24F / 2.5L H4 FB25', 'OEM Subaru spin-on filter'),
(2021, 'Subaru', 'Outback', 'Oil filter', '15208-AA160', 'Subaru', '2.4L H4 Turbo FA24F / 2.5L H4 FB25', 'OEM Subaru spin-on filter'),
(2022, 'Subaru', 'Outback', 'Oil filter', '15208-AA160', 'Subaru', '2.4L H4 Turbo FA24F / 2.5L H4 FB25', 'OEM Subaru spin-on filter'),
(2023, 'Subaru', 'Outback', 'Oil filter', '15208-AA160', 'Subaru', '2.4L H4 Turbo FA24F / 2.5L H4 FB25', 'OEM Subaru spin-on filter'),
(2024, 'Subaru', 'Outback', 'Oil filter', '15208-AA160', 'Subaru', '2.4L H4 Turbo FA24F / 2.5L H4 FB25', 'OEM Subaru spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Forester  (1998–2024)
-- ══════════════════════════════════════════════════════
(1998, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253', 'OEM Subaru spin-on filter'),
(1999, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253', 'OEM Subaru spin-on filter'),
(2000, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253', 'OEM Subaru spin-on filter'),
(2001, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253', 'OEM Subaru spin-on filter'),
(2002, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253', 'OEM Subaru spin-on filter'),
(2003, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2004, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2005, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2006, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2007, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2008, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2009, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2010, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2011, 'Subaru', 'Forester', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2012, 'Subaru', 'Forester', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2013, 'Subaru', 'Forester', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 2.0L H4 Turbo FA20DIT', 'OEM Subaru spin-on filter'),
(2014, 'Subaru', 'Forester', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 2.0L H4 Turbo FA20DIT', 'OEM Subaru spin-on filter'),
(2015, 'Subaru', 'Forester', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 2.0L H4 Turbo FA20DIT', 'OEM Subaru spin-on filter'),
(2016, 'Subaru', 'Forester', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 2.0L H4 Turbo FA20DIT', 'OEM Subaru spin-on filter'),
(2017, 'Subaru', 'Forester', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 2.0L H4 Turbo FA20DIT', 'OEM Subaru spin-on filter'),
(2018, 'Subaru', 'Forester', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25 / 2.0L H4 Turbo FA20DIT', 'OEM Subaru spin-on filter'),
(2019, 'Subaru', 'Forester', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25', 'OEM Subaru spin-on filter'),
(2020, 'Subaru', 'Forester', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25', 'OEM Subaru spin-on filter'),
(2021, 'Subaru', 'Forester', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25', 'OEM Subaru spin-on filter'),
(2022, 'Subaru', 'Forester', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25', 'OEM Subaru spin-on filter'),
(2023, 'Subaru', 'Forester', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25', 'OEM Subaru spin-on filter'),
(2024, 'Subaru', 'Forester', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 FB25', 'OEM Subaru spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Impreza  (1993–2024)
-- ══════════════════════════════════════════════════════
(1993, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '1.8L H4 EJ18E', 'OEM Subaru spin-on filter'),
(1994, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '1.8L H4 EJ18E', 'OEM Subaru spin-on filter'),
(1995, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '1.8L H4 EJ18E / 2.0L H4 EJ20', 'OEM Subaru spin-on filter'),
(1996, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '1.8L H4 EJ18E / 2.2L H4 EJ22E', 'OEM Subaru spin-on filter'),
(1997, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '1.8L H4 EJ18E / 2.2L H4 EJ22E', 'OEM Subaru spin-on filter'),
(1998, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.2L H4 EJ22E / 2.5L H4 EJ25D', 'OEM Subaru spin-on filter'),
(1999, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.2L H4 EJ22E / 2.5L H4 EJ25D', 'OEM Subaru spin-on filter'),
(2000, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.2L H4 EJ22E / 2.5L H4 EJ251', 'OEM Subaru spin-on filter'),
(2001, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.2L H4 EJ22E / 2.5L H4 EJ251', 'OEM Subaru spin-on filter'),
(2002, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ251 / 2.0L H4 EJ205 Turbo', 'OEM Subaru spin-on filter'),
(2003, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ251 / 2.0L H4 EJ205 Turbo', 'OEM Subaru spin-on filter'),
(2004, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.0L H4 EJ205 Turbo', 'OEM Subaru spin-on filter'),
(2005, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2006, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2007, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2008, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2009, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2010, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2011, 'Subaru', 'Impreza', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 EJ253 / 2.5L H4 EJ255 Turbo', 'OEM Subaru spin-on filter'),
(2012, 'Subaru', 'Impreza', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2013, 'Subaru', 'Impreza', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2014, 'Subaru', 'Impreza', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2015, 'Subaru', 'Impreza', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2016, 'Subaru', 'Impreza', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2017, 'Subaru', 'Impreza', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2018, 'Subaru', 'Impreza', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2019, 'Subaru', 'Impreza', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2020, 'Subaru', 'Impreza', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2021, 'Subaru', 'Impreza', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2022, 'Subaru', 'Impreza', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2023, 'Subaru', 'Impreza', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20 / 2.5L H4 FB25', 'OEM Subaru spin-on filter'),
(2024, 'Subaru', 'Impreza', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20 / 2.5L H4 FB25', 'OEM Subaru spin-on filter'),

-- ══════════════════════════════════════════════════════
-- WRX  (2002–2024)
-- Note: sold as Impreza WRX through 2014; standalone WRX nameplate from 2015
-- ══════════════════════════════════════════════════════
(2002, 'Subaru', 'WRX', 'Oil filter', '15208-AA100', 'Subaru', '2.0L H4 Turbo EJ205', 'OEM Subaru spin-on filter'),
(2003, 'Subaru', 'WRX', 'Oil filter', '15208-AA100', 'Subaru', '2.0L H4 Turbo EJ205 / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2004, 'Subaru', 'WRX', 'Oil filter', '15208-AA100', 'Subaru', '2.0L H4 Turbo EJ205 / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2005, 'Subaru', 'WRX', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 Turbo EJ255 / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2006, 'Subaru', 'WRX', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 Turbo EJ255 / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2007, 'Subaru', 'WRX', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 Turbo EJ255 / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2008, 'Subaru', 'WRX', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 Turbo EJ255 / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2009, 'Subaru', 'WRX', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 Turbo EJ255 / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2010, 'Subaru', 'WRX', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 Turbo EJ255 / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2011, 'Subaru', 'WRX', 'Oil filter', '15208-AA100', 'Subaru', '2.5L H4 Turbo EJ255 / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2012, 'Subaru', 'WRX', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 Turbo EJ255 / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2013, 'Subaru', 'WRX', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 Turbo EJ255 / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2014, 'Subaru', 'WRX', 'Oil filter', '15208-AA160', 'Subaru', '2.5L H4 Turbo EJ255 / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2015, 'Subaru', 'WRX', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 Turbo FA20DIT / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2016, 'Subaru', 'WRX', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 Turbo FA20DIT / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2017, 'Subaru', 'WRX', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 Turbo FA20DIT / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2018, 'Subaru', 'WRX', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 Turbo FA20DIT / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2019, 'Subaru', 'WRX', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 Turbo FA20DIT / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2020, 'Subaru', 'WRX', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 Turbo FA20DIT / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2021, 'Subaru', 'WRX', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 Turbo FA20DIT / 2.5L EJ257 STI', 'OEM Subaru spin-on filter'),
(2022, 'Subaru', 'WRX', 'Oil filter', '15208-AA160', 'Subaru', '2.4L H4 Turbo FA24DIT', 'OEM Subaru spin-on filter'),
(2023, 'Subaru', 'WRX', 'Oil filter', '15208-AA160', 'Subaru', '2.4L H4 Turbo FA24DIT', 'OEM Subaru spin-on filter'),
(2024, 'Subaru', 'WRX', 'Oil filter', '15208-AA160', 'Subaru', '2.4L H4 Turbo FA24DIT', 'OEM Subaru spin-on filter'),

-- ══════════════════════════════════════════════════════
-- Crosstrek  (2013–2024)
-- ══════════════════════════════════════════════════════
(2013, 'Subaru', 'Crosstrek', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2014, 'Subaru', 'Crosstrek', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2015, 'Subaru', 'Crosstrek', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2016, 'Subaru', 'Crosstrek', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2017, 'Subaru', 'Crosstrek', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2018, 'Subaru', 'Crosstrek', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20', 'OEM Subaru spin-on filter'),
(2019, 'Subaru', 'Crosstrek', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20 / 2.0L H4 PHEV', 'OEM Subaru spin-on filter'),
(2020, 'Subaru', 'Crosstrek', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20 / 2.0L H4 PHEV', 'OEM Subaru spin-on filter'),
(2021, 'Subaru', 'Crosstrek', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20 / 2.5L H4 FB25 / PHEV', 'OEM Subaru spin-on filter'),
(2022, 'Subaru', 'Crosstrek', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20 / 2.5L H4 FB25 / PHEV', 'OEM Subaru spin-on filter'),
(2023, 'Subaru', 'Crosstrek', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20 / 2.5L H4 FB25 / PHEV', 'OEM Subaru spin-on filter'),
(2024, 'Subaru', 'Crosstrek', 'Oil filter', '15208-AA160', 'Subaru', '2.0L H4 FB20 / 2.5L H4 FB25', 'OEM Subaru spin-on filter');
