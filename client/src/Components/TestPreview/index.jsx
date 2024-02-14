import React from 'react'
import '../../Components/TestPreview/TestPreview.css';

const TestPreview = () => {
  return (
    <>
    <h2>Story Preview</h2>

    <form>
        <div>
            <button className="change-preview">Change preview image</button>

            <div>
                <input type="text" className="input-line input-title" placeholder="Write a preview title" />
                <input type="text" className="input-line" placeholder="Write a preview subtitle..." />
            </div>
        </div>

        <div>
            <h4>Publishing to: <b>Angela Chavez</b></h4>
            <p className="p3">Help your fans know what your writing about by adding related hastags #classpenguin</p>
            <input type="text" className="input-hashtag" placeholder="Add hashtags" />

            <div className="publish-wrapper">
                <button type="submit" className="button-publish">Publish to the huddele!</button>
            </div>
        </div>
    </form>
    </>
  )
}

export default TestPreview