// LoadingSpinner.jsx


const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-t-transparent"></div>
    </div>
  );
};

export default Loading;
