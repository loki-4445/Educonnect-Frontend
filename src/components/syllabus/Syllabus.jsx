import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Syllabus.css';

const Syllabus = () => {
    const [courseList, setCourseList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [viewType, setViewType] = useState('syllabus'); // State for toggling views

    useEffect(() => {
        async function fetchCourses() {
            try {
                let res = await fetch(`http://localhost:4000/exam-api/courses`);
                const data = await res.json();
                
                if (res.ok) {
                    const uniqueCourses = data.reduce((acc, current) => {
                        const x = acc.find(item => item.subjectName === current.subjectName);
                        return !x ? acc.concat([current]) : acc;
                    }, []);

                    const sortedCourses = uniqueCourses.sort((a, b) =>
                        a.subjectName.localeCompare(b.subjectName)
                    );

                    setCourseList(sortedCourses); 
                    setFilteredCourses(sortedCourses); 
                } else {
                    console.error('Error fetching courses:', data.message);
                    setCourseList([]);
                    setFilteredCourses([]);
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        }

        fetchCourses();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = courseList.filter(item =>
            item.subjectName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCourses(filtered);
    };

    const openLink = (course, type) => {
        let fullUrl;
        if (type === 'video') {
            fullUrl = course.videoLink;
        } else if (type === 'notes') {
            fullUrl = course.notesLink;
        } else {
            fullUrl = course.syllabus; // If you have a syllabus link, otherwise handle it accordingly
        }
        window.open(fullUrl, '_blank'); 
    };

    const updateViewType = async (newViewType) => {
        setViewType(newViewType);
        
        try {
            const userId = 'your_user_id_here'; // Replace with actual user ID
            await fetch(`http://localhost:4000/exam-api/update-view`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    viewType: newViewType,
                }),
            });
        } catch (error) {
            console.error('Error updating view type:', error);
        }
    };

    return (
        <div className="controls">
    <div className="view-toggle">
        <button onClick={() => updateViewType('syllabus')} className={viewType === 'syllabus' ? 'active' : ''}>Syllabus</button>
        <button onClick={() => updateViewType('video')} className={viewType === 'video' ? 'active' : ''}>Video Links</button>
        <button onClick={() => updateViewType('notes')} className={viewType === 'notes' ? 'active' : ''}>Notes</button>
    </div>

    <div className="syllabus-search-container">
        <form onSubmit={handleSearch} className="syllabus-search-form">
            <div className="syllabus-search-icon-container">
                <FaSearch className="syllabus-search-icon" />
            </div>
            <input
                type="text"
                placeholder="Search Courses"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="syllabus-search-input"
            />
            <button type="submit" className="syllabus-search-button">Search</button>
        </form>
    </div>
</div>
    
    );
};

export default Syllabus;
