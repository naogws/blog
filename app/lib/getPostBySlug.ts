import client from '@/app/lib/sanity';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export async function getPostBySlug(slug: string) {
  const query = `*[_type == 'blogPost' && slug.current == '${slug}'] {
    _id,
    'postedAt': _createdAt,
    'editedAt': _updatedAt,
    title,
    coverImage,
    description,
    content
  }[0]`;

  const data = await client.fetch(query);

  data.postedAt = formatDate(data.postedAt);
  data.editedAt = formatDate(data.editedAt);

  return data;
}
