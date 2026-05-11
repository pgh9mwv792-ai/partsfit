# PartsFit — Car Parts Fitment App

## What This Is
A React web app that helps car owners find correct OEM part numbers and verify fitment before buying.

## Tech Stack
- React (create-react-app)
- Supabase for database and auth
- Vercel for hosting
- eBay Motors API (pending approval) for parts data

## Live URL
https://partsfit-oxz9gq5d4-cedars-projects-97338d01.vercel.app

## Supabase Project
URL: https://kcyczipsttklbmcoirxo.supabase.co
Tables: Parts, verifications

## Current Features
- Vehicle selector (year/make/model/trim)
- VIN lookup via NHTSA API (auto-fills vehicle fields)
- Part type selector
- Fitment result pulled from Supabase Parts table
- Community verification (confirmed/didnt_fit/fit_with_mods)
- Part number lookup tab
- Two tabs: Check fitment + Look up part number

## Database Coverage So Far
- Honda Civic (all generations 1996-2024, all trims/engines)
- Honda Accord (all generations 1990-2024, all trims/engines)

## Planned Features
- Saved garage (user accounts)
- Verification count display
- eBay Motors API integration
- Photo identification (AI vision)
- Engine swap builder
- Affiliate links
- PWA for iPhone installation

## Key Files
- src/App.js — main app code
- src/supabase.js — Supabase client config

## Notes
- Developer has no prior coding experience
- Keep explanations beginner-friendly
- Always specify exactly where in the code changes go
- OEM oil filter 15400-PLM-A02 fits virtually all Honda models 1984-2025