// Render trang giới thiệu
exports.getIntroduce = (req, res, next) => {
  res.render("header/introduce", {
    index: 2,
  });
};

//Render trang dịch vụ
exports.getServiceSuaChuaMayLanh = (req, res, next) => {
  res.render("header/service/sua_chua_may_lanh", {
    index: 3,
  });
};

exports.getServiceThaoLapMayLanh = (req, res, next) => {
  res.render("header/service/thao_lap_may_lanh", {
    index: 3,
  });
};

exports.getServiceSuaChuaMayGiat = (req, res, next) => {
  res.render("header/service/sua_chua_may_giat", {
    index: 3,
  });
};

exports.getServiceSuaChuaTuLanh = (req, res, next) => {
  res.render("header/service/sua_chua_tu_lanh", {
    index: 3,
  });
};

exports.getServiceVeSinhMayLanh = (req, res, next) => {
  res.render("header/service/ve_sinh_may_lanh", {
    index: 3,
  });
};

exports.getServiceVeSinhMayGiat = (req, res, next) => {
  res.render("header/service/ve_sinh_may_giat", {
    index: 3,
  });
};

exports.getServiceSuaChuaDienNuocDanDung = (req, res, next) => {
  res.render("header/service/sua_chua_dien_nuoc_dan_dung", {
    index: 3,
  });
};

exports.getServiceLapDatMayNuocNong = (req, res, next) => {
  res.render("header/service/lap_dat_may_nuoc_nong", {
    index: 3,
  });
};

exports.getServiceSuaChuaMayNuocNong = (req, res, next) => {
  res.render("header/service/sua_chua_may_nuoc_nong", {
    index: 3,
  });
};

//Render trang báo giá
exports.getQuote = (req, res, next) => {
  res.render("header/quote", {
    index: 4,
  });
};

//Render trang liện hệ
exports.getContact = (req, res, next) => {
  res.render("header/contact", {
    index: 5,
  });
};
