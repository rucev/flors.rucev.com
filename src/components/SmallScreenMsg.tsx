const SmallScreenMsg = () => {

  return <div className="w-screen h-screen min-h-fit max-w-screen flex flex-col gap-2 justify-center items-center py-2 px-1">
    <i className="bi bi-arrows-fullscreen text-accent text-3xl"></i>
    <span className="font-bold text-accent text-center">Looks like your screen’s a bit small! Try resizing your window or using a larger device for the best view.</span>
  </div>

}

export default SmallScreenMsg