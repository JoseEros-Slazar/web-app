import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../../stylesheets/index.css'

class UserCourses extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let { season, year } = this.props
        const courses = this.props.courses
        let path
        let CoursesToRender = courses.map((val,i) => {
            path = `/course/${val.classCode}`
            return(
                <div className="card" key={i}>
                    <div className="card-body">
                    <h5 className="card-title">{val.className}</h5>
                    <p className="card-text">Section: {val.section}</p>
                    <Link to={{
                            pathname: path,
                            state: {
                                season: season,
                                year: year,
                                courseId: val.id,
                                section: val.section
                            }
                          }}
                          className="caret"/>
                    </div>
                </div>)
        })

        if (courses.length === 0) {
            path = `/course/submit/`
            CoursesToRender = (
                <div className="card">
                    <div className="card-body">
                    <center><p className="card-text">Sorry you have no classes</p>
                    <Link to={path} className="btn btn-primary">Add a class</Link></center>
                    </div>
                </div>
            )
        }
        return(
            <div>
                <center><h3>Here are your current classes</h3></center>
                {CoursesToRender}
            </div>
        )
    }
}

export default UserCourses
