import { Avatar } from "@/components/ui/avatar";

interface BlogType {
  content: string;
  title: string;
  id: number;
  publishedDate: string;
  author: {
    name: string;
  };
}

const UserBlogs = ({ blog }: { blog: BlogType }) => {
  const formatDate = new Date(blog.publishedDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      <div className="flex justify-center px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full pt-32 max-w-screen-xl gap-8">
          {/* Blog Content */}
          <div className="md:col-span-8">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold break-words">
              {blog.title}
            </div>
            <div className="pt-3 text-sm sm:text-base">
              {formatDate}
            </div>
            <div className="text-base sm:text-lg font-medium pt-4 break-words">
              {blog.content}
            </div>
          </div>

          {/* Author Info */}
          <div className="md:col-span-4">
            <div className="text-base sm:text-lg font-semibold">
              Author
            </div>
            <div className="flex pt-3 flex-col gap-2 items-start">
              <Avatar>
                <span className="text-lg font-semibold">
                  {blog.author.name.charAt(0)}
                </span>
              </Avatar>
              <div className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                {blog.author.name}
              </div>
              <div className="text-sm sm:text-base pt-2">
                {blog.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBlogs;
