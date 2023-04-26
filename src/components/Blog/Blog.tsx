import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import axios from "axios";

export const Blog: React.FC<any> = (props: any) => {
  const url = `https://api.tumblr.com/v2/blog/liamcoll.tumblr.com/posts?api_key=${
    import.meta.env.VITE_TUMBLR_KEY
  }`;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios(url)
      .then((res) => setPosts(res.data.response.posts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((item: any) => (
          <li>
            {item.type === "photo" && <Image src={item.image_permalink} />}
            {item.type === "text" && (
              <a href={item.post_url} target="_blank">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
