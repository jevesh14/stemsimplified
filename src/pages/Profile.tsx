
import Navbar from "@/components/Navbar";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Profile</h1>
        <p className="text-gray-600">
          This is where user profile information will be displayed.
        </p>
      </div>
    </div>
  );
};

export default Profile;
