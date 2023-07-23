import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Button } from 'react-bootstrap';
import './Blog.css';

const BlogCard = () => {
    const [blogPosts, setBlogPosts] = useState([]); // State to store the fetched blogPosts
    const [expandedPostId, setExpandedPostId] = useState(null);

    const handleReadMoreClick = (postId) => {
        if (expandedPostId === postId) {
            setExpandedPostId(null);
        } else {
            setExpandedPostId(postId);
        }
    };

    useEffect(() => {
        // Function to fetch blogPosts from the API
        const fetchBlogPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setBlogPosts(response.data); // Update the state with the fetched data
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchBlogPosts(); // Call the function to fetch data when the component mounts
    }, []);

    return (
        <Container>
            <h1 className="mt-5">Welcome to My Blog</h1>
            {blogPosts.map((post) => (
                <Card key={post.id} className="my-3">
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        {expandedPostId === post.id ? (
                            <Card.Text>{post.body}</Card.Text>
                        ) : (
                            <Card.Text>{post.body.slice(0, 100)}...</Card.Text>
                        )}
                        <Card.Subtitle className="mb-2 text-muted">Written by User {post.userId}</Card.Subtitle>
                        <Button variant="primary" onClick={() => handleReadMoreClick(post.id)}>
                            {expandedPostId === post.id ? 'Read Less' : 'Read More'}
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};

export default BlogCard;
