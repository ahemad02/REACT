import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import databaseService from "../appwrite/config";
import Button from "../components/Button";
import Container from "../components/container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      databaseService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  const deletePost = () => {
    databaseService.deletePost(post.$id).then((status) => {
      databaseService.deleteFile(post.featuredImage);
      navigate("/");
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full  justify-center mb-4 relative  rounded-xl p-1">
          <img
            src={databaseService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rouded-xl mb-2.5"
          />
          {isAuthor && (
            <div className="absolute-right-6 top-6 ">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-blue-600" className="mr-10 ">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <div className="browser-css">{parse(post.content)}</div>
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post;
