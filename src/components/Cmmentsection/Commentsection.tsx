import React, { useState, useEffect } from 'react';

interface Comment {
  id: number;
  text: string;
  author: string;
}

interface namesing {
  name: string;
}

export default function CommentSection({ name }: namesing) {
  const [comments, setComments] = useState<Comment[]>([
  ]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const linking = `http://127.0.0.1:8000/${name}`;
      const response = await fetch(linking);
      const data = await response.json();
      const comments_all = data.comments;
      setComments(prevComments => [
        ...comments_all.map((text: string, index: number) => ({
          id: prevComments.length + index + 1,
          text,
          author: 'Alice'
        }))
      ]);
    };
    fetchData();
  }, [name]);

  const handleAddComment = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (newComment.trim() === '') return;

    // Add the new comment to the local state immediately
    const newCommentObject = {id: comments.length + 1,text: newComment,author: 'Current User'};
    setComments(prevComments => [...prevComments, newCommentObject]);

    setNewComment('');

    // Send the comment to the backend
    const linking = `http://127.0.0.1:8000/${name}/add_comments/`;
    try {
      const res = await fetch(linking, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comment: newComment })
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Failed to send comment to backend:', error);
      // Optionally, you could remove the comment from the local state here if the request fails
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={3}
          placeholder="Add a comment..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button
          onClick={handleAddComment}
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Post Comment
        </button>
      </div>
      
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white shadow-sm rounded-lg p-4 flex flex-col space-y-2">
            <div className="text-sm font-medium text-gray-800">{comment.author}</div>
            <div className="text-gray-600">{comment.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}