import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://cbrltmreniazxgkqdvxi.supabase.co/rest/v1/posts?',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNicmx0bXJlbmlhenhna3FkdnhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NTM2MTgsImV4cCI6MjA2NjMyOTYxOH0.TbWKeB779FLFw_CO_Czj6jToBlBS_f2YbdofTnEKF5A",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNicmx0bXJlbmlhenhna3FkdnhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NTM2MTgsImV4cCI6MjA2NjMyOTYxOH0.TbWKeB779FLFw_CO_Czj6jToBlBS_f2YbdofTnEKF5A"
}
})