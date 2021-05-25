import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  MANAGE_COURSES_PAGE_HEADING,
  COURSE_TYPE_BLOG,
  COURSE_TYPE_COURSE,
  LOAD_MORE_TEXT,
  SEARCH_TEXTBOX_PLACEHOLDER,
} from "../../../config/strings";
import FetchBuilder from "../../../lib/fetch";
import { addressProps, authProps, profileProps } from "../../../types";
import { Section } from "@courselit/components-library";
import dynamic from "next/dynamic";
import { networkAction } from "../../../redux/actions";
import {
  checkPermission,
  constructThumbnailUrlFromFileUrl,
} from "../../../lib/utils";
import { permissions } from "../../../config/constants";
import { makeStyles } from "@material-ui/styles";
import { Add, Search } from "@material-ui/icons";
import Link from "next/link";

const Img = dynamic(() => import("../../Img.js"));

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "50px !important",
    [theme.breakpoints.up("md")]: {
      height: "100px !important",
    },
    width: "auto !important",
    background: "red",
  },
  listItem: {
    cursor: "pointer",
  },
}));

const Index = (props) => {
  const [coursesPaginationOffset, setCoursesPaginationOffset] = useState(1);
  const [creatorCourses, setCreatorCourses] = useState([]);
  const [searchText, setSearchText] = useState("");
  const classes = useStyles();

  useEffect(() => {
    loadCreatorCourses();
  }, []);

  // useEffect(() => {
  //   const map = [];
  //   creatorCourses.map((course) => {
  //     map.push(getComponent(course));
  //   });
  //   map.push({
  //     Overview: (
  //       <Button
  //         variant="outlined"
  //         className={classes.btn}
  //         onClick={loadCreatorCourses}
  //       >
  //         {LOAD_MORE_TEXT}
  //       </Button>
  //     ),
  //   });
  //   if (
  //     checkPermission(props.profile.permissions, [permissions.manageCourse])
  //   ) {
  //     map.unshift({
  //       subtitle: NEW_COURSE_PAGE_HEADING,
  //       Overview: (
  //         <>
  //           <Button
  //             variant="outlined"
  //             color="primary"
  //             startIcon={<Add />}
  //             className={classes.btn}
  //           >
  //             Add new
  //           </Button>
  //         </>
  //       ),
  //       Detail: <CourseEditor closeEditor={() => {}} />,
  //     });
  //   }
  //   setComponentsMap(map);
  // }, [coursesPaginationOffset]);

  // const getComponent = (course) => ({
  //   subtitle: EDIT_COURSE_PAGE_HEADING,
  //   Overview: (
  //     <>
  //       <Img src={constructThumbnailUrlFromFileUrl(course.featuredImage)} />
  //       <GridListTileBar
  //         title={course.title}
  //         subtitle={course.isBlog ? COURSE_TYPE_BLOG : COURSE_TYPE_COURSE}
  //       />
  //     </>
  //   ),
  //   Detail: (
  //     <CourseEditor
  //       courseId={course.id}
  //       markDirty={() => {}}
  //       closeEditor={() => {}}
  //     />
  //   ),
  // });

  const loadCreatorCourses = async () => {
    const query = `
    query {
      courses: getCoursesAsAdmin(
        offset: ${coursesPaginationOffset}
      ) {
        id,
        title,
        featuredImage,
        isBlog,
        courseId
      }
    }
    `;
    const fetch = new FetchBuilder()
      .setUrl(`${props.address.backend}/graph`)
      .setPayload(query)
      .setIsGraphQLEndpoint(true)
      .setAuthToken(props.auth.token)
      .build();
    try {
      props.dispatch(networkAction(true));
      const response = await fetch.exec();
      if (response.courses && response.courses.length > 0) {
        setCreatorCourses([...creatorCourses, ...response.courses]);
        setCoursesPaginationOffset(coursesPaginationOffset + 1);
      }
    } catch (err) {
    } finally {
      props.dispatch(networkAction(false));
    }
  };

  const searchCourses = async (e) => {
    e.preventDefault();
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <Section>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h1">
                {MANAGE_COURSES_PAGE_HEADING}
              </Typography>
            </Grid>
            <Grid item>
              <form onSubmit={searchCourses}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="searchtext">
                    {SEARCH_TEXTBOX_PLACEHOLDER}
                  </InputLabel>
                  <OutlinedInput
                    id="searchtext"
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="search"
                          edge="end"
                          type="submit"
                        >
                          <Search />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </form>
            </Grid>
          </Grid>
        </Section>
      </Grid>
      <Grid item xs={12}>
        <Section>
          <Grid container direction="column" spacing={2}>
            {checkPermission(props.profile.permissions, [
              permissions.manageCourse,
            ]) && (
              <Grid item>
                <Link href="/dashboard/courses/edit">
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<Add />}
                  >
                    Add new
                  </Button>
                </Link>
              </Grid>
            )}
            <Grid item>
              <List>
                {creatorCourses.map((course, index) => (
                  <Link
                    href={`/dashboard/courses/edit/${course.courseId}`}
                    key={index}
                  >
                    <ListItem className={classes.listItem}>
                      <ListItemAvatar>
                        <Img
                          src={constructThumbnailUrlFromFileUrl(
                            course.featuredImage
                          )}
                          classes={classes.avatar}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={course.title}
                        secondary={
                          course.isBlog ? COURSE_TYPE_BLOG : COURSE_TYPE_COURSE
                        }
                      />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={loadCreatorCourses}>
                {LOAD_MORE_TEXT}
              </Button>
            </Grid>
          </Grid>
        </Section>
      </Grid>
    </Grid>
  );
};

Index.propTypes = {
  auth: authProps,
  profile: profileProps,
  dispatch: PropTypes.func.isRequired,
  address: addressProps,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  address: state.address,
});

export default connect(mapStateToProps)(Index);
