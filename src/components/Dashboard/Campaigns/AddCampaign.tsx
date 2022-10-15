import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { imageURLConverter } from "../../../helpers";

const AddCampaign = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<any>([]);

  const handleImagesUpload = (e: any) => {
    let images = [];
    console.log(e.target.files);
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(imageURLConverter(e.target.files[i]));
    }
    console.log(images);
    setImages(images)
  };

  return (
    <div className="dashboard__components add__campaign">
      <div className="campaigns__head">
        <h5>Add Campaign</h5>
        <i
          className="bx bx-x"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/dashboard/campaigns")}
        ></i>
      </div>
      <div className="form__group">
        <div className="form__area">
          <label htmlFor="title">Title of Campaign</label>
          <input type="text" name="title" placeholder="Mission" />
        </div>
        <div className="form__area">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id=""
            cols={30}
            rows={10}
            placeholder="Campaign Description"
          />
        </div>
        <div className="form__area">
          <label htmlFor="target">Campaign Target</label>
          <input type="number" name="target" placeholder="50,000" />
        </div>
        <div className="form__area upload__images">
          <label>
            <i className="bx bx-image"></i>
            <p>Click to upload images</p>
            <input
              type="file"
              name="images"
              onChange={handleImagesUpload}
              multiple
              accept="image/png, image/jpeg, image/webp"
              style={{ display: "none" }}
            />
          </label>
        </div>
        <div className="form__area images">
            {(images || []).map((image: string) => (
                <div className="image">
                    <img src={image} alt="mission evidence" />
                </div>
            ))}
        </div>
        <div className="form__area">
            <button>Submit Campaign</button>
        </div>
      </div>
    </div>
  );
};

export default AddCampaign;
