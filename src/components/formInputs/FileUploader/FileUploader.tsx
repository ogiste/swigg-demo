import React from "react";
import {useFormikContext} from "formik";
import {useDropzone} from "react-dropzone";

const UploadComponent = (props) => {
  const {setFieldValue} = props;
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
      "text/html": [".html", ".htm"],
    },
    onDrop: (acceptedFiles) => {
      setFieldValue("files", acceptedFiles);
    },
  });
  return (
      <div>
        {}
        <div {...getRootProps({className: "dropzone"})}>
          <input {...getInputProps()} />
          {isDragActive ? (
              <p>Drop Image here</p>
          ) : (
              props.children || <p>Add Image Here</p>
          )}
        </div>
      </div>
  );
};

export default function FileUploader(props: any) {
  const {values, setFieldValue} = useFormikContext<any>();
  return (
      <div className="container">
        <div className="form-group">
          {/*<label htmlFor="file">Upload File</label>*/}

          <UploadComponent setFieldValue={setFieldValue}>
            {props.children}
          </UploadComponent>
          {/*{values.files &&*/}
          {/*  values.files.map((file, i) => (*/}
          {/*    <li key={i}>*/}
          {/*      {`File:${file.name} Type:${file.type} Size:${file.size} bytes`}{" "}*/}
          {/*    </li>*/}
          {/*  ))}*/}
        </div>
        {/*<button type="submit" className="btn btn-primary">*/}
        {/*  submit*/}
        {/*</button>*/}
      </div>
  );
}
