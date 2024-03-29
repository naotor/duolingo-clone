"use client";

import type { courses } from "@/db/schema";
import { Card } from "./card";

type ListProps = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: number;
};

export function List({ courses, activeCourseId }: ListProps) {
  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          disabled={false}
          active={course.id === activeCourseId}
          onClick={() => {}}
        />
      ))}
    </div>
  );
}
