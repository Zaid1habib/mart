import React from 'react'
import "../css/Review.css"
import { useSelector } from 'react-redux'
const Reviews = () => {
    const mainCate = useSelector(state => state)        
    console.log(mainCate, "this is main review")
    return (
        < div className = 'Reviews' >
            {/* <h3 className='Review-header'>Customer's Review's</h3> */ }
            <div>
                <div className="container">
                    <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
                        <h4 className="font-cond-l fg-accent lts-md mgb-10" contenteditable="false">Not Yet Convinced?</h4>
                        <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" contenteditable="false">Read Customer Reviews</h1>
                    </div>
                    <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                        <li>
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                            <p className="fs-110 font-cond-l" contenteditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
                            <h5 className="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Martha Stewart</h5>
                            <small className="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Business Woman - New York</small>
                        </li>
                        <li>
                            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                            <p className="fs-110 font-cond-l" contenteditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
                            <h5 className="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Ariana Menage</h5>
                            <small className="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Recording Artist - Los Angeles</small>
                        </li>
                        <li>
                            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                            <p className="fs-110 font-cond-l" contenteditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
                            <h5 className="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Sean Carter</h5>
                            <small className="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Fund Manager - Chicago</small>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Reviews