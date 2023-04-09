



function ImageCard(props){
    const image=props.image;
    const tags=image.tags.split(',')
    console.log(tags);
return(
    <>

<div className="max-w-sm   rounded overflow-hidden shadow-lg">
        <div className="h-[240px]">
        <img className="w-full h-full" src={image.largeImageURL}></img>
        </div>
        <div className="px-6 py-4">
            <div className="flex justify-start items-center gap-[60px]">
            <div className="font-bold text-purple-500 text-xl">
                Photo by {image.user}
            </div>
            <div className="w-[60px] ">
                <img src={image.userImageURL} className='rounded-full w-full'></img>
            </div>
            </div>
            <ul>
                <li>
                    <strong>Views:</strong>
                    {image.views}
                </li>
                <li>
                    <strong>
                        Downloads:
                    </strong>
                    {image.downloads}
                </li>
                <li>
                    <strong>Likes:</strong>
                    {image.likes}
                </li>
            </ul>
            <div className="px-6 py-4">
                
             {
                tags.map((element,index) => {
                    return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 m-2" key={index}>
                    {element}
                    </span>
                })
             }
            </div>
        </div>
        </div>
    </>
)
}
export default ImageCard;