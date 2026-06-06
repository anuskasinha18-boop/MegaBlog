import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div style={{padding: '2rem 0'}}>
            <Container>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem', position: 'relative', borderRadius: 'var(--border-radius)', padding: '0.5rem'}} className="surface">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        style={{borderRadius: 'var(--border-radius)', maxWidth: '100%', height: 'auto'}}
                    />

                    {isAuthor && (
                        <div style={{position: 'absolute', right: '1.5rem', top: '1.5rem', display: 'flex', gap: '0.75rem'}}>
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button variant="primary">
                                    Edit
                                </Button>
                            </Link>
                            <Button variant="danger" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div style={{marginBottom: '1.5rem'}}>
                    <h1 style={{fontSize: '2rem', fontWeight: 'bold'}}>{post.title}</h1>
                </div>
                <div className="browser-css" style={{color: 'var(--text-secondary)', lineHeight: '1.8'}}>
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}