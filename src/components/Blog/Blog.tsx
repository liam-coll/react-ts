import { useEffect, useState } from "react";
import { Accordion, Image, Tab, Tabs } from "react-bootstrap";
import axios from "axios";
interface post {
  timestamp: number;
  caption: string;
  title: string;
  body: string;
  video_url: string;
  photos: [];
}

export const Blog: React.FC<any> = () => {
  let [years, setYears] = useState<number[]>([]);

  const getYear = (item: any) => {
    return new Date(item.timestamp * 1000).getFullYear();
  };

  const [posts, setPosts] = useState<post[]>([]);

  const url = `https://api.tumblr.com/v2/blog/liamcoll.tumblr.com/posts?api_key=${
    import.meta.env.VITE_TUMBLR_KEY
  }`;

  const findYears = () => {
    posts.forEach((post: post) => {
      if (!years.includes(getYear(post))) {
        setYears([...years, getYear(post)]);
      }
    });
  };

  const getPosts = () => {
    axios(url)
      .then((res) => setPosts(res.data.response.posts))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    findYears();
  }, [posts]);

  const YearAccordion: React.FC<any> = (props: {
    posts: post[];
    year: number;
  }) => {
    return (
      <Accordion className="mb-5">
        {props.posts
          .filter((i: post) => getYear(i) === props.year)
          .map((item: any, key: number) => (
            <Accordion.Item eventKey={String(key)}>
              <Accordion.Header>
                <p
                  className="noPadding p-0 m-0"
                  dangerouslySetInnerHTML={{
                    __html:
                      item.type === "video"
                        ? item.caption.slice(
                            0,
                            item.caption.indexOf("</p>") + 4
                          )
                        : item.title
                        ? item.title
                        : "No title",
                  }}
                ></p>
              </Accordion.Header>
              <Accordion.Body>
                {item.type !== "video" ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.body ? item.body : "No description",
                    }}
                  />
                ) : (
                  <>
                    <video className="w-100" src={item.video_url} controls />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.caption.slice(
                          item.caption.indexOf("</p>") + 4,
                          item.caption.length
                        ),
                      }}
                    ></p>
                  </>
                )}
                {item.photos &&
                  item.photos.map((i: any) => (
                    <Image src={i.original_size.url} />
                  ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
      </Accordion>
    );
  };

  return (
    <>
      <h2>Blog</h2>
      <Tabs defaultActiveKey={years[0]}>
        {years.map((item) => (
          <Tab eventKey={item} title={item}>
            <YearAccordion year={item} posts={posts} />
          </Tab>
        ))}
      </Tabs>
    </>
  );
};
