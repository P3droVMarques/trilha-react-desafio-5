import supabase from '../utils/supabase'; 

export const getPosts = async () => {
    const {data, error} = await supabase
        .from('posts')
        .select('*');
        if (error) {
        console.error('Erro ao buscar posts:', error);
        return [];
    }

    return data || [];

}

export const getPostBySlug = async (id) => {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching post:', error);
        return {};
    }

    console.log('Post retornado:', data);

    return data;
}

