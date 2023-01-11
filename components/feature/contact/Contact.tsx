import React, { useState } from "react";
import toast from "react-hot-toast";
import { RxDoubleArrowUp } from "react-icons/rx";

const Contact: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const onSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const onBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const onSubmit = () => {
    if (!subject) {
      toast.error("Please include a subject.");
      return;
    }

    if (!body) {
      toast.error("Please include a body.");
      return;
    }

    window.location.assign(
      `mailto:johncarlo.camara1@gmail.com?subject=${subject}&body=${body}`
    );
  };

  return (
    <article id="contact" className="hero min-h-screen bg-base-200 ">
      <section className="p-0 m-5 hero-content flex-col md:p-1 lg:flex-row-reverse">
        <section className="text-center lg:text-left">
          <h1 className="title">Get in touch!</h1>
          <p className="py-6 max-w-xl">
            I&apos;m always open to new opportunities, collaborations, or just a
            casual chat about your latest project or idea. Don&apos;t hesitate
            to get in touch through the form; I&apos;ll do my best to get back
            to you as soon as I don&apos;t have any school work.
          </p>
        </section>
        <section className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <section className="card-body">
            <section className="form-control">
              <label className="label font-bold" htmlFor="subject">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Meeting: discuss project updates"
                maxLength={50}
                value={subject}
                onChange={onSubjectChange}
                className="input input-bordered"
              />
            </section>
            <section className="form-control">
              <label className="label font-bold" htmlFor="body">
                <span className="label-text">Body</span>
              </label>
              <textarea
                id="body"
                placeholder="I hope this message finds you well. I would like to schedule a meeting to discuss the updates on the project. Please let me know your availability and a suitable time."
                value={body}
                onChange={onBodyChange}
                className="textarea textarea-bordered"
                rows={7}
              ></textarea>
            </section>
            <section className="form-control mt-6">
              <button className="btn btn-primary" onClick={onSubmit}>
                Submit
              </button>
            </section>
          </section>
          <section className="fixed bottom-5 right-5">
            <a href="#top" className="btn btn-ghost">
              <RxDoubleArrowUp size={25} />
            </a>
          </section>
        </section>
      </section>
    </article>
  );
};

export default Contact;
