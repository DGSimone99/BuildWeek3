import React, { useState } from "react";
import { Button, Card, Dropdown, Image } from "react-bootstrap";
import {
  Bookmark,
  CaretDownFill,
  ChatDots,
  EyeSlashFill,
  FlagFill,
  HandThumbsUpFill,
  Link45deg,
  SendFill,
  ThreeDots,
  TrashFill,
} from "react-bootstrap-icons";
import { BiGlobe, BiPencil, BiShareAlt, BiX, BiXCircle } from "react-icons/bi";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { fetchGetPost, removePost } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ModalePost from "./ModalePost";

const PostCard = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const user = useSelector((state) => state.user.content);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [like, setLike] = useState(Math.floor(Math.random() * 100));
  const [liked, setLiked] = useState(false);

  const [display, setDisplay] = useState(true);

  const [followers] = useState(Math.floor(Math.random() * 1000));
  const [comments] = useState(Math.floor(Math.random() * 100));
  const [shares] = useState(Math.floor(Math.random() * 100));

  const likeClick = () => {
    if (liked) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="mt-3">
      {display ? (
        <Card.Body className="p-0">
          <div className="d-flex justify-content-between">
            <Card.Title
              className="d-flex align-items-center px-3 pt-3 pointer"
              onClick={() => {
                navigate("/" + props.id);
              }}
            >
              <div className="me-2">
                <Image variant="top" src={props.userImg} height={48} width={48} className="rounded-circle" />
              </div>
              <div>
                <h5 className="mb-0">
                  {props.userName} {props.surname}
                </h5>
                <p className="fw-normal my-1 text-secondary" style={{ fontSize: "0.6em" }}>
                  {followers} follower
                </p>
                <p className="fw-normal mb-0 d-flex align-items-center text-secondary" style={{ fontSize: "0.6em" }}>
                  {props.date} &#8226;&nbsp;<BiGlobe></BiGlobe>
                </p>
              </div>
            </Card.Title>
            <div className="d-flex pe-3 pt-0 mt-0 align-items-center fs-2">
              <Dropdown>
                {props.id == user._id && (
                  <BiPencil className="me-3 fs-3 p-0 mb-2 pointer" onClick={() => setModalShow(true)}></BiPencil>
                )}
                <ModalePost show={modalShow} onHide={() => setModalShow(false)} postid={props.postId} />
                <Dropdown.Toggle className="bg-transparent p-0 m-0 border-0 me-2 mb-2 toggleRemove">
                  <ThreeDots></ThreeDots>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="fw-semibold d-flex align-items-center py-3">
                    <Bookmark className="me-2 text-black"></Bookmark> Salva
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-semibold d-flex align-items-center py-3">
                    <Link45deg className="me-2 text-black"></Link45deg> Copia link al post
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-semibold d-flex align-items-center py-3">
                    <EyeSlashFill className="me-2 text-black"></EyeSlashFill> Non mi interessa
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-semibold d-flex align-items-center py-3">
                    <BiXCircle className="me-2 text-black"></BiXCircle> Smetti di seguire {props.userName}
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-semibold d-flex align-items-center py-3">
                    <FlagFill className="me-2 text-black"></FlagFill> Segnala post
                  </Dropdown.Item>
                  {props.id == user._id ? (
                    <Dropdown.Item
                      className="fw-semibold d-flex align-items-center py-3"
                      onClick={() => {
                        dispatch(removePost(props.postId)), dispatch(fetchGetPost());
                      }}
                    >
                      <TrashFill className="me-2 text-black"></TrashFill> Cancella Post
                    </Dropdown.Item>
                  ) : (
                    <div></div>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <Button className="bg-transparent border-0 m-2 p-0" onClick={() => setDisplay(false)}>
                <BiX className="text-black fs-2"></BiX>
              </Button>
            </div>
          </div>
          <Card.Text className="d-flex align-items-center px-3">{props.text}</Card.Text>
          {props.image ? (
            <div>
              <Card.Img src={props.image} className="rounded-0"></Card.Img> <hr className="my-1"></hr>
            </div>
          ) : (
            <div></div>
          )}
          <div className="d-flex justify-content-between me-3  mb-2">
            <div className="d-flex px-3 align-items-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-2 pointer bg-info"
                style={{ paddingBlock: "3px", paddingInline: "3px" }}
              >
                <HandThumbsUpFill className="text-white" id="thumb-up" onClick={likeClick}></HandThumbsUpFill>
              </div>
              <div>{like}</div>
              <Card.Text className="d-flex justify-content-between"></Card.Text>
            </div>
            <Card.Text className="mb-0">
              {comments} commenti &#8226; {shares} diffusioni post
            </Card.Text>
          </div>
          <hr className="mx-3 pt-0 mt-0"></hr>
          <div className="d-flex px-4 pb-3 justify-content-center align-items-center">
            <div onClick={likeClick}>
              <Button
                variant="primary"
                className="bg-transparent border-0 text-dark fw-semibold d-flex align-items-center"
              >
                {liked ? (
                  <BsHandThumbsUpFill className="text-info me-1"></BsHandThumbsUpFill>
                ) : (
                  <BsHandThumbsUp className="text-black  me-1"></BsHandThumbsUp>
                )}
                Consiglia
              </Button>
            </div>
            <Button
              variant="primary"
              className="bg-transparent border-0 text-dark fw-semibold d-flex align-items-center ms-3"
            >
              <ChatDots className="me-1"></ChatDots> Commenta
            </Button>
            <Button
              variant="primary"
              className="bg-transparent border-0 text-dark fw-semibold d-flex align-items-center mx-3"
            >
              <BiShareAlt className="me-1"></BiShareAlt> Diffondi il post
            </Button>
            <Button
              variant="primary"
              className="bg-transparent border-0 text-dark fw-semibold d-flex align-items-center"
            >
              <SendFill className="me-1"></SendFill> Invia
            </Button>
          </div>
        </Card.Body>
      ) : (
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="d-flex align-items-center px-2 pt-1">Post nascosto</Card.Title>
            <Button
              className="bg-transparent border-0 my-2 mx-3 p-0"
              onClick={() => {
                setDisplay(true);
              }}
            >
              <CaretDownFill></CaretDownFill>
            </Button>
          </div>
        </Card.Body>
      )}
    </Card>
  );
};

export default PostCard;
