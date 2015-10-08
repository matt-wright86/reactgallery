var Photobin = React.createClass({

  render: function() {

    var imgList = this.props.imgs
    var jsxList = imgList.map(function(img){
       return <p> <img src={img}/> </p>
    })

    return (
      <div>
        <div>
          <h1 className="text-center">
            list of photos
            </h1>
            {jsxList}
        </div>
        <Dropzone onDrop={this.onAddFile}>
            <div className="text-center">
              <div className="dzone">
              Drag &amp; drop files here or click here to browse for files.
            </div>
          </div>
        </Dropzone>
      </div>
   )
  }
})
