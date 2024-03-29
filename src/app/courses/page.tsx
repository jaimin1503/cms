import { Course } from '@/store/atoms';
import db from "@/db";
import { Courses } from '@/components/Courses';

async function getCourses() {
  const courses = db.course.findMany()
  return courses;
}


export default async function CoursesComponent({ params }: { params: { courses: Course[] } }) {
  const courses = await getCourses();
  return <Courses courses={courses} />
}

