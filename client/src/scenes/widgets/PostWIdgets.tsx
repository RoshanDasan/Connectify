import {
    EditOutlined,
    DeleteOutline,
    AttachFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined,
    Palette,
    DeleteOutlined
} from "@mui/icons-material";
import {
    Box,
    Divider,
    Typography,
    InputBase,
    useTheme,
    Button,
    IconButton,
    useMediaQuery
} from "@mui/material";
import Flex from "../../components/DisplayFlex";
import Dropzone from 'react-dropzone';
import UserImage from "../../components/UserImage";
import WidgetWraper from "../../components/WidgetWraper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state";
import { getPosts } from "../../api/apiConnection/postConnection";
import { red } from "@mui/material/colors";

const PostWidgets = (picturePath: any) => {
    const dispatch = useDispatch();
    const theme = useTheme()
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [post, setPost] = useState('');
    const { palette } = useTheme();
    const { _id } = useSelector((state: any) => state.token.user);
    const token = useSelector((state: any) => state.token.token);
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
    const mediumMain = theme.palette.background.paper;
    const medium = theme.palette.background.paper;

    const handlePost = async () => {
        const formData = new FormData();
        formData.append('userId', _id);
        formData.append('description', post);
        if (image) {
            formData.append('picture', image);
            formData.append('picturePath', image.name);
        }
        const postResponse: any = await getPosts(token);
        dispatch(setPosts(postResponse));
        setImage(null);
        setPost('');
    };

    return (
        <WidgetWraper>
            <Flex gap='1.5rem' >
                <UserImage image={picturePath} />
                <InputBase
                    placeholder="Enter your thoughts"
                    onChange={(e) => setPost(e.target.value)}
                    value={post}
                    sx={{
                        width: '100%',
                        backgroundColor: 'whitesmoke',
                        borderRadius: '2rem',
                        padding: '1rem 2rem'
                    }}
                />
            </Flex>
            {isImage && (
                <Box
                    border={'1px solid black'}
                    borderRadius='5px'
                    mt='1rem'
                    p='1rem'
                >
                    <Dropzone
                        // acceptedFiles=".jpg,.jpeg,.png"
                        multiple={false}
                        onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <Flex>
                                <Box
                                    {...getRootProps()}
                                    border={`2px dashed ${palette.primary.main}`}
                                    p="1rem"
                                    width="100%"
                                    sx={{ "&:hover": { cursor: "pointer" } }}
                                >
                                    <input {...getInputProps()} />
                                    {!image ? (
                                        <p>Add Image Here</p>
                                    ) : (
                                        <Flex>
                                            <Typography>{image.name}</Typography>
                                            <EditOutlined />
                                        </Flex>
                                    )}
                                </Box>
                                {image && (
                                    <IconButton
                                        onClick={() => setImage(null)}
                                        sx={{ width: "15%" }}
                                    >
                                        <DeleteOutlined />
                                    </IconButton>
                                )}
                            </Flex>
                        )}
                    </Dropzone>

                </Box>
            )}

            <Divider sx={{ margin: '1.25rem 0' }} />
            <Flex>
                <Flex gap="0.25rem" onClick={() => setIsImage(!isImage)}>
                    <ImageOutlined  />
                    <Typography
                       
                        sx={{ "&:hover": { cursor: "pointer", color: "green" } }}
                    >
                        Image
                    </Typography>
                </Flex>

                {isNonMobileScreens ? (
                    <>
                        <Flex gap="0.25rem">
                            <GifBoxOutlined  />
                            <Typography  sx={{ "&:hover": { cursor: "pointer", color: "green" } }}>Clip</Typography>
                        </Flex>

                        <Flex gap="0.25rem">
                            <AttachFileOutlined  />
                            <Typography  sx={{ "&:hover": { cursor: "pointer", color: "green" } }}>Attachment</Typography>
                        </Flex>

                        <Flex gap="0.25rem">
                            <MicOutlined  />
                            <Typography  sx={{ "&:hover": { cursor: "pointer", color: "green" } }}>Audio</Typography>
                        </Flex>
                    </>
                ) : (
                    <Flex gap="0.25rem">
                        <MoreHorizOutlined  />
                    </Flex>
                )}
                <Button
                    disabled={!post}
                    onClick={handlePost}
                    sx={{
                        color: "white",
                        backgroundColor: 'darkgray',
                        borderRadius: "3rem",
                    }}
                >
                    POST
                </Button>

            </Flex>

        </WidgetWraper>
    )
};

export default PostWidgets;
