"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Clock, Globe, User, Users } from "lucide-react";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Introduction to React",
    description:
      "Learn the fundamentals of React, including components, state, and hooks.",
    instructor: "Jane Doe",
    duration: "4 weeks",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Advanced TypeScript",
    description:
      "Master TypeScript with advanced types, generics, and integration with React.",
    instructor: "John Smith",
    duration: "6 weeks",
    level: "Advanced",
  },
  {
    id: 3,
    title: "Web Design with Tailwind CSS",
    description:
      "Create modern, responsive designs using Tailwind CSS and best practices.",
    instructor: "Emily Johnson",
    duration: "5 weeks",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Full-Stack Next.js",
    description:
      "Build scalable full-stack applications with Next.js 15 and TypeScript.",
    instructor: "Michael Brown",
    duration: "8 weeks",
    level: "Intermediate",
  },
];

const features = [
  {
    id: 1,
    icon: Award,
    title: "Expert Instructors",
    description:
      "Learn from industry leaders with years of experience and proven success.",
  },
  {
    id: 2,
    icon: Globe,
    title: "Global Community",
    description: "Join a diverse community of learners from around the world.",
  },
  {
    id: 3,
    icon: Users,
    title: "Personalized Support",
    description:
      "Get tailored guidance and support to achieve your learning goals.",
  },
  {
    id: 4,
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace with 24/7 access to course materials.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Mehwish Khan",
    role: "Junior Developer",
    quote:
      "The IT courses here helped me master React and land my first job in tech!",
    avatar: "profile1.jpg", // Replace with actual image path or URL
  },
  {
    id: 2,
    name: "Elizabeth Jeffries",
    role: "Data Analyst",
    quote:
      "The Python training was exceptional—now I analyze data with confidence.",
    avatar: "profile1.jpg",
  },
  {
    id: 3,
    name: "Emily Torres",
    role: "UI/UX Designer",
    quote:
      "This institute's design course transformed my skills for real-world projects.",
    avatar: "profile1.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-[var(--bg-theme)] text-[var(--text-theme)]">
      {/* Hero */}
      <section className="relative w-full h-[500px] flex items-center justify-center text-center">
        {/* Background Image */}
        <Image
          src="/hero.jpg"
          alt="ICT Center Hero"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <article className="relative z-10 max-w-3xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to ICT Center
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo
            odit eveniet ipsum accusantium dolorum sed voluptas illum facere
            doloribus!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition cursor-pointer">
              Enroll Now
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition cursor-pointer">
              Learn More
            </button>
          </div>
        </article>
      </section>

      {/* Top Courses */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <article className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Top Courses
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Explore our most popular courses to boost your skills and career.
            </p>
          </article>

          {/* Course Grid */}
          <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gray-50 text-black"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-700">
                      {course.instructor}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-700">
                      {course.duration}
                    </span>
                  </div>
                  <Badge variant="default" className="bg-gray-200 text-black">
                    {course.level}
                  </Badge>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-400"
                    asChild
                  >
                    <a href={`/courses/${course.id}`}>Enroll Now</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </article>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <article className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Discover what makes our platform the best choice for your learning
              journey.
            </p>
          </article>

          {/* Feature Grid */}
          <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className="flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border-neutral-200"
              >
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{feature.description}</p>
                  <button className="text-blue-700 hover:text-blue-800 active:text-blue-600 border-2 border-gray-200 bg-none rounded-lg py-0.5 px-2 mt-4 cursor-pointer">
                    Learn More
                  </button>
                </CardContent>
              </Card>
            ))}
          </article>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading and Decoration */}
          <div className="relative text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              What Our Students Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Hear from our students about how our IT institute shaped their
              tech careers.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="flex flex-col items-center gap-6">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="w-full max-w-md border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-8">
            <Button variant="outline" className="">
              View More
            </Button>
          </div>
        </div>
      </section>

      <section>Call-to-Action Footer</section>
    </div>
  );
}
