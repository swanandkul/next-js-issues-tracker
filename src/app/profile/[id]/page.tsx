export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">
        ProfilePage
        <span className=" p2 ml-2 text-2xl rounded bg-orange-600 text-black">
          {params.id}
        </span>
      </p>
    </div>
  );
}
