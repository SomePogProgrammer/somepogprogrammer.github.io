'use client'
import Header from '../../components/header'
import { apiFuncs, api_RequestTime_Limit } from 'server-globals'
import { Helmet } from 'react-helmet'
import { useForm } from "react-hook-form"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import '../scss/contact-me.scss'
import "../../page.scss";
import "../../globals.scss";

const ContactMe = () => {

    useEffect(() => {

        if (!localStorage.getItem("Last_Request_Time")) {
            localStorage.getItem("Last_Request_Time", null)
        }
        if (!localStorage.getItem("Job_Request")) {
            localStorage.setItem("Job_Request", null)
        }
        if (!localStorage.getItem("Interview_Request")) {
            localStorage.setItem("Interview_Request", null)
        }

    }, [])
    var defaultReqTime = api_RequestTime_Limit
    const [jobRequestData, setJobRequestData] = useState();
    const [lastRequestTime, setRequestTime] = useState(defaultReqTime);
    const router = useRouter()
    const { register, handleSubmit } = useForm();
    var currentTime = apiFuncs.getESTLocalTime({ getRawTime: true });

    const useOnSubmit = (data, e) => {
        e.preventDefault()
        setJobRequestData(data)
        useAPIRequest_Job(e, data)
    }

    useEffect(() => {
        var lastReqTime = localStorage.getItem("Last_Request_Time")

        if (lastReqTime) {
            defaultReqTime = lastReqTime
        }

        if (localStorage.getItem("Job_Request") != "null") {
            router.prefetch("/pages/JobRequests/" + localStorage.getItem("Job_Request"))
            router.push("/pages/JobRequests/" + localStorage.getItem("Job_Request"), { scroll: "smooth" })
        }

    }, [])
    async function useAPIRequest_Job(e, jobRequestData_) {
        if (localStorage.getItem("Job_Request") == "null") {
            e.preventDefault()
            var req_ = await ContactMe.apiRequest(
                "Portfolio_Data/Job_Requests/Fetch",
                "POST",
                JSON.stringify(jobRequestData_),
                currentTime, lastRequestTime
            );
            if (req_ != "Request Limit Exceeded.") {
              //console.log("Request", req_)
                var req = JSON.parse(req_)

                if (req._id) {
                    setRequestTime(currentTime);
                    /* console.log({  // Debug Purpose
                       "Request Time": lastRequestTime,
                       "Current Time": currentTime,
                     });
                     */
                }
                //console.log("Request ID:", req._id)
                localStorage.setItem("Last_Request_Time", currentTime);
                if (req._id) {
                  fetch(process.env.NEXT_PUBLIC_SITE_URL + "/api/revalidate" + `path=/pages/JobRequests/${req._id}/&secret=${process.env.SECRET_}`)
                }
                req._id != null
                    ? localStorage.setItem("Job_Request", req._id)
                    : alert("An Error Occured In Processing The Request, \n Try again in 25-30s, thank you! \n (The Window Will Now Reload)");
                router.prefetch("/pages/JobRequests/" + localStorage.getItem("Job_Request"))
                window.location.reload()
            } else {
                console.log(req_)
                alert("An Error Occured In Processing The Request, \n Try again in 25-30s, thank you! \n (The Window Will Now Reload)");
                window.location.reload()
            }
        }
    }

    return (
      <div className="contact-me-container">
        <Helmet></Helmet>
        <Header rootClassName="header-root-class-name3"></Header>

        <div className="contact-me-banner"></div>
        <div className="contact-me-container01">
          <h1 className="contact-me-text text-center">
            <span>Send A Job Offer!</span>
            <br />
            <br />
          </h1>
          <div className="contact-me-container02 flex justify-center">
            <svg className="contact-me-icon w-10 h-10 md:w-16 md:h-16">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <svg className="contact-me-icon02 w-10 h-10 md:w-16 md:h-16">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
          </div>
          <div className="contact-me-container03">
            <div className="contact-me-container04 flex justify-center">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-me-icon04 w-10 h-10 md:w-16 md:h-16"
              >
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                className="contact-me-icon06 w-10 h-10 md:w-16 md:h-16"
              >
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                className="contact-me-icon08 w-10 h-10 md:w-16 md:h-16"
              >
                <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
              </svg>
            </div>
          </div>
          <div className="contact-me-container05">
            <form
              id="jobOfferForm"
              className="contact-me-container05"
              onSubmit={handleSubmit(useOnSubmit)}
            >
              <h3 className="contact-me-company">
                <span>Your Company</span>
                <span className="contact-me-text05">*</span>
              </h3>

              <input
                type="text"
                minLength={2}
                maxLength={300}
                required
                placeholder="Company / Employer Name"
                {...register("companyName", { required: true })}
                className="contact-me-company-name input inputOnContactMe"
              />
              <h3 className="contact-me-contact">
                <span>Contact: </span>
                <span className="contact-me-text07">*</span>
                <br />
                <span className="contact-me-text09">Contact Type: </span>
                <span className="contact-me-text10">*</span>
                <br />
              </h3>
              <select
                {...register("contactType", { required: true })}
                required
                className="contact-me-select inputOnContactMe"
              >
                <option defaultValue="Phone">Phone</option>
                <option value="Email">Email</option>
                <option value="Discord">Discord</option>
              </select>
              <input
                type="text"
                minLength={2}
                maxLength={300}
                required
                placeholder="Contacts:"
                {...register("contacts", { required: true })}
                autoComplete="off"
                className="contact-me-contacts input inputOnContactMe"
              />
              <h3 className="contact-me-job-head">
                <span>Job: </span>
                <br />
                <span className="contact-me-text14">Description: </span>
                <span className="contact-me-text15">*</span>
                <br />
              </h3>
              <input
                type="text"
                minLength={2}
                maxLength={4500}
                required
                placeholder="Job Description"
                {...register("jobDescription", { required: true })}
                autoComplete="off"
                className="contact-me-job-description input inputOnContactMe"
              />
              <h3 className="contact-me-job-head1">
                <span className="contact-me-text17">Role/Job: </span>
                <span className="contact-me-text18">*</span>
                <br />
              </h3>
              <input
                type="text"
                minLength={2}
                maxLength={300}
                required
                placeholder="Role (Ex: Front-End Developer)"
                {...register("roleOfJob", { required: true })}
                autoComplete="off"
                className="contact-me-job-role input inputOnContactMe"
              />
              <h3 className="contact-me-job-head2">
                <span className="contact-me-text20">Job Type: </span>
                <span className="contact-me-text21">*</span>
                <br />
              </h3>
              <select
                {...register("jobType", { required: true })}
                required
                className="contact-me-select1_ inputOnContactMe"
              >
                <option defaultValue="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Commission">Commission</option>
                <option value="Part Time - Internship">
                  Part Time - Internship
                </option>
                <option value="Full Time - Internship">
                  Full Time - Internship
                </option>
              </select>
              <input
                type="text"
                minLength={1}
                maxLength={300}
                required
                placeholder="Hours"
                {...register("hours", { required: true })}
                autoComplete="off"
                className="contact-me-hours input inputOnContactMe"
              />
              <h3 className="contact-me-payment">
                <span>Payment: </span>
                <br />
                <span className="contact-me-text25">Payment Method: </span>
                <span className="contact-me-text26">*</span>
                <br />
              </h3>
              <select
                {...register("paymentMethod", { required: true })}
                required
                className="contact-me-select2 inputOnContactMe"
              >
                <option defaultValue="USD - Cashapp">USD - Cashapp</option>
                <option value="USD - Check">USD - Check</option>
                <option value="USD - Cash">USD - Cash</option>
              </select>
              <input
                type="text"
                minLength={2}
                maxLength={300}
                required
                placeholder="Payment Per Hour (Or total for commissions)"
                {...register("payment", { required: true })}
                autoComplete="off"
                className="contact-me-payment-per input inputOnContactMe"
              />

              <input
                type="submit"
                className="contact-me-send-offer-job button"
                value={"Send Offer"}
              ></input>
            </form>
          </div>
        </div>
        <div className="contact-me-container06 md:flex">
          <h1 className="contact-me-text28">Schedule an Interview!</h1>
          <h1 className="contact-me-text29">
            I&apos;ll get an email telling me this information, I will contact
            you so we can schedule it!
          </h1>
          <div className="contact-me-container07">
            <svg className="contact-me-icon10">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <svg className="contact-me-icon12">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
          </div>
          <div className="contact-me-container08">
            <div className="contact-me-container09">
              <svg viewBox="0 0 1024 1024" className="contact-me-icon14">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="contact-me-icon16">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="contact-me-icon18">
                <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
              </svg>
            </div>
          </div>
          <div id="ScheduleForm" className="contact-me-container10">
            <h3 className="contact-me-company1">
              <span>
                Your Company
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span className="contact-me-text31">*</span>
            </h3>
            <input
              type="text"
              minLength={2}
              required
              placeholder="Company / Employer Name"
              className="contact-me-company-name1 input inputOnContactMe"
            />
            <h3 className="contact-me-contact1">
              <span>Contact: </span>
              <span className="contact-me-text33">*</span>
              <br></br>
              <span className="contact-me-text35">Contact Type: </span>
              <span className="contact-me-text36">*</span>
              <br></br>
            </h3>
            <select required className="contact-me-select3 inputOnContactMe">
              <option defaultValue="Phone">Phone</option>
              <option value="Email">Email</option>
              <option value="Discord">Discord</option>
            </select>
            <input
              type="email"
              required
              placeholder="Contacts:"
              autoComplete="off"
              className="contact-me-contacts1 input inputOnContactMe"
            />
            <h3 className="contact-me-job-head3">
              <span>Job: </span>
              <br></br>
              <span className="contact-me-text40">Description: </span>
              <span className="contact-me-text41">*</span>
              <br></br>
            </h3>
            <input
              type="text"
              minLength={2}
              required
              placeholder="Job Description"
              autoComplete="off"
              className="contact-me-job-description1 input inputOnContactMe"
            />

            <button
              onClick={async () => {
                alert(
                  "Sorry for the trouble; however this feature is still a WIP. \nThanks for your understanding, however feel free to send a job application!"
                );
                
                  await fetch(
                    process.env.NEXT_PUBLIC_SITE_URL +
                      "/server/api/primaryRoute/Portfolio_Data/Job_Requests/Fetch"
                  ).then(async (req) => {
                    var data = await req.json();
                    alert("Your Data, Sire: \n" + JSON.stringify(data));
                    console.log(data);
                  })
              }}
              className=" contact-me-send-offer-interview button"
            >
              Send Offer
            </button>
          </div>
        </div>

        <div className="contact-me-banner-flip mx-auto md:flex">
          <footer className="w-full">
            <div className="w-full md:w-3/5 md:ml-24">
              <h2 className="header-page-heading text-2xl md:text-4xl !bg-none">
                Want to Chat?
                <br />
                <span className="text-lg md:text-xl">
                  Here are some of my other contacts
                </span>
              </h2>
              <div className="md:flex inputOnContactMe hover:bg -shadow-med-shadow hover:-shadow-hover-med-shadow border-[#282828] border-2 rounded-md w-full mb-8 p-5 md:p-10 flex flex-row place-items-center justify-center space-x-4 md:space-x-12">
                <a
                  href="https://github.com/SomePogProgrammer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-2/6 relative cursor-pointer flex place-items-center space-x-4 justify-center border-2 rounded-md p-2 pr-5 pl-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  <h3>My GitHub</h3>
                </a>
                <a
                  href="https://discord.com/users/718090479585198111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-2/6 relative cursor-pointer flex place-items-center space-x-4 justify-center border-2 rounded-md p-2 pr-5 pl-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                  </svg>
                  <h3>My Discord</h3>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&source=mailto&to=quincy.m.dack@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-2/6 relative cursor-pointer flex place-items-center space-x-4 justify-center border-2 rounded-md p-2 pr-5 pl-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />{" "}
                  </svg>
                  <h3>My Email</h3>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
}


ContactMe.apiRequest = async function (fetchLocation, method, data, currentTime, lastRequestTime) {
    fetchLocation =
        process.env.AUTHORIZED_REQ_URL +
        "/server/api/primaryRoute/" +
        fetchLocation;

    currentTime = apiFuncs.getESTLocalTime({ getRawTime: true });

    var _data = {}
    if (Math.abs(currentTime - lastRequestTime) >= api_RequestTime_Limit) {

        return await fetch(fetchLocation, {
            method: method,
            body: data,

            headers: {
                "Content-Type": "application/json",
            },
        }).then(async (res) => {

            var data = await res.json();

            if (data["ERROR_"]) {
                throw { "Error Message": data["Message"], ERROR_: data["ERROR_"] };
            } else {
                _data = JSON.parse(data)
                JSON.parse(data)
               //console.log("Return Data", _data)
                return data
            }
        }).catch((err) => {
            console.log(err);
        });

    } else {
        return "Request Limit Exceeded.";
    }
}


export default ContactMe

