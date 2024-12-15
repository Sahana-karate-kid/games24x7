import React from "react";
import "./Modal.css";
import thumbsup from "../assets/thumbsup.svg";
import confetti from "../assets/confetti.svg";
import straightArrow from "../assets/straigh_arrow.svg";
import dashedline from "../assets/dashedline.svg";
import arrowhead from "../assets/Arrow_head.svg";
import caution from "../assets/caution.svg";

function Modal(props) {
  if (!props.trigger) return null; // Early return if modal is not triggered

  const handleClose = () => props.setTrigger(false);
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container" onClick={stopPropagation}>
        {/* Header */}
        <div className="gst-header justify-spacebetween">
          <strong>GST? No Worries!</strong>
          <span className="close-btn" onClick={handleClose}>
            &times;
          </span>
        </div>

        {/* Modal Content */}
        <div className="flex-column">
          {/* GST Info Section */}
          <div className="gst-info">
            <div className="Sub-section">
              <img src={caution} className="caution"></img>
              <div className="info-header">
                Starting 1st October 2023, 28% GST is being charged by
                Government on your deposits.
              </div>
            </div>
            <div className="highlight-info flex-row">
              <img src={thumbsup} className="icon-svg" alt="Thumbs Up" />
              <strong className="margin-top-10">
                100% Govt. GST paid by RummyCircle
              </strong>
            </div>
          </div>

          {/* GST Benefits Section */}
          <div className="flex-column margin-top-10 margin-bottom-10 bottom1">
            <div className="gst-benefits flex-row justify-spacebetween">
              GST benefits earned so far{" "}
              <span className="green">₹1,10,000</span>
            </div>

            {/* How GST Works */}
            <div className="gst-works">
              <h3>How GST on deposit works?</h3>
              <div className="flex-column">
                {/* Pay Info */}
                <div className="pay-info">
                  <div>You Pay</div>
                  <strong className="font-large">₹1000</strong>
                  <br />
                  <small className="grey">Inclusive of Govt. GST</small>
                </div>

                <img src={dashedline}></img>
                <div className="flex-row">
                  <img src={arrowhead} className="arrowleft"></img>
                  <img src={arrowhead} className="arrowright"></img>
                </div>

                {/* GST Breakdown */}
                <div className="gst-breakdown justify-spacebetween">
                  <div className="gst-box">
                    <strong className="green">₹780</strong>
                    <br />
                    <span className="font-small">Goes to your wallet</span>
                  </div>
                  <div className="gst-box">
                    <strong className="red">₹220</strong>
                    <br />
                    <span className="font-small">
                      Govt. GST on your deposit
                    </span>
                  </div>
                </div>

                <div className="flex-row bottom3">
                  <div className="gst-paid">
                    <div className="confetti-container">
                      <img
                        src={confetti}
                        className="confetti-bg"
                        alt="Confetti"
                      />
                    </div>
                    <div>
                      <strong className="green font-large">₹220</strong>
                      <br />
                      <img
                        src={thumbsup}
                        className="icon-bottom"
                        alt="Thumbs Up"
                      />
                      <span>
                        GST paid by <strong>RummyCircle</strong> on your behalf
                      </span>
                    </div>
                  </div>
                  <img src={straightArrow} className="flex-column"></img>
                  <div className="gst-wallet flex-column">
                    <div className="font-small">You Get</div>
                    <div className="green">
                      <strong>₹1000</strong>
                    </div>
                    <div className="font-small">in your wallet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
