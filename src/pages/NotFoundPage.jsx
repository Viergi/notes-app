import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

export default function NotFoundPage() {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="not_found">
      <p>
        {locale == "id" ? "Halaman Tidak Ditemukan 404" : "Page Not Found 404"}
      </p>
    </div>
  );
}
