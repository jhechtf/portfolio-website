import { UnknownPageProps } from '$fresh/server.ts';

export default function Base404({
  url
}: UnknownPageProps) {

  return (
    <div className="mx-auto max-w-screen-xl pt-10">
      <h1 className="text-4xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h1>

      <figure className="my-3">
        <blockquote className="border-l-4 text-xl rounded-r-lg border-green-400 pl-5 p-7 bg-gray-100 text-gray-500">
          To find nothing in the infinite is equal parts impressive and alarming.
        </blockquote>

        <figcaption className="ml-2 text-lg">
          &ndash; Jim Burbridge.
        </figcaption>

      </figure>

      <p>
        I&apos;m not really sure how this happened. What made you try to go here?
      </p>

      <p>
        Well since you&apos;re wandering around aimlessly, mind checkout out
        <a href="/blog">my articles</a>? I've been told they're the best thing since nothing!
      </p>

    </div>
  )
}