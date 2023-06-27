import { useSelector } from "react-redux";
import PostCard from "../../components/post/PostCard";
import { Fragment } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import PostSkeleton from "../../components/post/PostSkeleton";

function ExplorePage() {
  useDocumentTitle("Explore | Twitify");
  const { allPosts, initialLoading } = useSelector((state) => state.posts);

  const sortedPostsByDate = [...allPosts].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA; // Sort in descending order (newest to oldest)
  });

  const sortedPostsMapped = initialLoading ? (
    <div className="flex justify-center p-4">
      <PostSkeleton />
    </div>
  ) : sortedPostsByDate?.length ? (
    sortedPostsByDate.map((post) => (
      <Fragment key={post._id}>
        <PostCard postData={post} />
      </Fragment>
    ))
  ) : (
    <p className="text-center p-4 font-semibold">No posts here!</p>
  );

  return (
    <div className="mb-[64px] sm:mb-4">
      <div className="bg-black font-inter px-4 py-3 border-b border-solid border-darkerGray text-xl font-bold">
        <h1>Explore</h1>
      </div>
      {sortedPostsMapped}
    </div>
  );
}

export default ExplorePage;
