"use client";
import React, { useEffect, useRef } from "react";
import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/blocks/types/jsx";

type Props = {
  onUpload: (e: string) => any;
};

LR.registerBlocks(LR);

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
    };
    if (ctxProviderRef.current) {
      ctxProviderRef.current.addEventListener(
        "file-upload-success",
        handleUpload
      );
    }
  }, []);

  return (
    <>
      <div>
        <div>
          <FileUploaderRegular
            sourceList="local, camera, facebook, gdrive"
            cameraModes="photo, video"
            classNameUploader="uc-light"
            pubkey="66573fc330e70fd01eba"
          />
        </div>
      </div>
    </>
  );
};

export default UploadCareButton;
