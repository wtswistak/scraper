function LoadingLayout() {
  return (
    <div className="fixed top-0 inset-0 z-50 flex items-center justify-center bg-slate-400/20 backdrop-blur-sm ">
      <div className="loader"></div>
    </div>
  );
}

export default LoadingLayout;
