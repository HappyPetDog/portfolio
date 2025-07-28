export const environment = {
    production: true,
    supabaseUrl: 'https://aibnolhrftaublaekzci.supabase.co',
    supabaseKey: (window as any)['env']?.NG_APP_API_KEY || ''
};
