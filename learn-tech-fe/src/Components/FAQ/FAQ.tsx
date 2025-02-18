export const FAQ = () => {
    return (
        <>
            <p className="text-center m-5 t-color heading-64"
                data-aos="fade-right">
                <i className="bi bi-question-circle-fill me-3 " style={{ fontSize: "2.5rem", color: "#28a745" }} ></i>
                FAQ`s
            </p>
            <div className="container-fluid d-flex justify-content-center">
  <div className="accordion my-4 w-100 px-lg-5 px-md-4 px-2" id="accordionExample" style={{ maxWidth: "1200px" }}>
    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Do you provide courses on flexible timings?
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          Yes, we offer flexible course timings, including weekday and weekend options. You can enroll based on your needs.
        </div>
      </div>
    </div>

    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Are online classes available?
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          Yes, online classes are available and can be scheduled based on your flexible timing.
        </div>
      </div>
    </div>

    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Can I learn programming without prior experience?
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          Absolutely! Our beginner-friendly courses are designed for those with no prior coding knowledge, with step-by-step guidance.
        </div>
      </div>
    </div>

    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id="headingFour">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
          Can I take a course at my own pace?
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          Yes! Along with live sessions, we provide recorded videos so you can learn at your own pace.
        </div>
      </div>
    </div>

    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id="headingFive">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
        >
          Is there any support available after the course?
        </button>
      </h2>
      <div
        id="collapseFive"
        className="accordion-collapse collapse"
        aria-labelledby="headingFive"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          Yes! You’ll have ongoing support even after the course ends. Our instructors and community forums are available for help.
        </div>
      </div>
    </div>

    <div className="accordion-item mb-2">
      <h2 className="accordion-header" id="headingSix">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSix"
          aria-expanded="false"
          aria-controls="collapseSix"
        >
          What happens if I miss a class?
        </button>
      </h2>
      <div
        id="collapseSix"
        className="accordion-collapse collapse"
        aria-labelledby="headingSix"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          If you miss a class, you will receive a recorded session, and we can arrange a make-up session with other students.
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}