var express = require("express");
var router = express.Router();
const headerController = require("../controllers/header.controller");

//route get/post form thêm mới nhật ký
router.get("/introduce", headerController.getIntroduce);
router.get("/suachuamaylanh", headerController.getServiceSuaChuaMayLanh);
router.get("/thaolapmaylanh", headerController.getServiceThaoLapMayLanh);
router.get("/suachuamaygiat", headerController.getServiceSuaChuaMayGiat);
router.get("/suachuatulanh", headerController.getServiceSuaChuaTuLanh);
router.get("/vesinhmaylanh", headerController.getServiceVeSinhMayLanh);
router.get("/vesinhmaygiat", headerController.getServiceVeSinhMayGiat);
router.get(
  "/suachuadiennuocdandung",
  headerController.getServiceSuaChuaDienNuocDanDung
);
router.get("/lapdatmaynuocnong", headerController.getServiceLapDatMayNuocNong);
router.get(
  "/suachuamaynuocnong",
  headerController.getServiceSuaChuaMayNuocNong
);
router.get("/quote", headerController.getQuote);
router.get("/contact", headerController.getContact);
module.exports = router;
