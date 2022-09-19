import React from "react";

import { Upload } from "antd";
import { RiUploadCloud2Line } from "react-icons/ri";

const { Dragger } = Upload;

const beforeUserImageUpload = async (file) => {
  try {
    const base64 = await getBase64(file);

    const payload = {
      service: "adventure-launch",
      encoded_image: base64,
    };

    const { data } = await axios.post(
      "https://transmitter.evidentbd.com/api/v1/upload/global/image",
      payload
    );

    setUserImageURL(data.data.edge_url);

    openSuccessNotification({ description: "Image successfully uploaded" });
  } catch (error) {
    openErrorNotification({ description: "Try Again. Something went wrong" });
    console.log(error);
  }

  return false;
};

export default function ImageModal() {
  return (
    <Dragger
      multiple={false}
      beforeUpload={beforeUserImageUpload}
      className="upload-list-inline hp-w-100"
      listType="picture"
      maxCount={1}
      accept="image/png, image/jpeg, image/jpg"
    >
      <p className="ant-upload-drag-icon">
        <RiUploadCloud2Line className="remix-icon" />
      </p>

      <p className="ant-upload-text">Click or drag file to this area to upload</p>

      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data
        or other band files
      </p>
    </Dragger>
  );
}
