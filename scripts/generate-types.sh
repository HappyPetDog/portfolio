# Generate Supabase types and save to the Angular app
npx supabase gen types typescript --project-id aibnolhrftaublaekzci > ./src/app/types/database.types.ts

echo "✅ Supabase types generated successfully."