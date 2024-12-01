import { getCampaignDataFromBackend } from "@/components/northfund-admin/api";
import { columns } from "@/components/northfund-admin/columns";
import { DataTable } from "@/components/northfund-admin/data.table";
import { Modal } from "@/components/northfund-admin/modal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { authorizeCampaign } from "@/components/northfund-admin/api";
const AdminPage = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await getCampaignDataFromBackend();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  const handleRowClick = (campaign) => {
    setSelectedCampaign(campaign);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCampaign(null);
  };

  const handleApprove = async () => {
    if (!selectedCampaign) return;

    try {
      setLoading(true);
      setError("");

      const { start_at, email, title } = selectedCampaign;
      const startDate = new Date(start_at).toISOString();

      const response = await authorizeCampaign(
        startDate,
        email,
        title,
        "approved"
      );

      toast.success(response.message);

      setCampaigns((prevCampaigns) =>
        prevCampaigns.map((campaign) =>
          campaign._id === selectedCampaign._id
            ? { ...campaign, status: "approved", authorized: true }
            : campaign
        )
      );
      closeModal();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDecline = async () => {
    if (!selectedCampaign) return;

    try {
      setLoading(true);
      setError("");

      const { start_at, email, title } = selectedCampaign;
      const startDate = new Date(start_at).toISOString();

      const response = await authorizeCampaign(
        startDate,
        email,
        title,
        "rejected"
      );

      toast.success(response.message);
      setCampaigns((prevCampaigns) =>
        prevCampaigns.map((campaign) =>
          campaign._id === selectedCampaign._id
            ? { ...campaign, status: "rejected", authorized: false }
            : campaign
        )
      );
      closeModal();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" min-h-screen py-10">
      <div className="max-w-full mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-50">
            Northfund Campaign Management Dashboard
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            View and manage all the campaigns, monitor progress, and more.
          </p>
        </header>

        {/* Data Table Section */}
        <div className="overflow-hidden  shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-medium text-gray-200">
              Campaigns Overview
            </h2>
            <p className="mt-2 text-sm text-gray-200">
              Browse all active and pending campaigns, manage details, and track
              funding goals.
            </p>
          </div>

          <div className="px-4 py-5 sm:px-6">
            <DataTable
              columns={columns}
              data={campaigns}
              onRowClick={handleRowClick}
            />
          </div>

          {isModalOpen && selectedCampaign && (
            <Modal closeModal={closeModal}>
              <div className="p-6 space-y-6 overflow-y-auto max-h-[60vh]">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-900">
                  {selectedCampaign.title}
                </h2>

                {/* Grid Layout for Displaying Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  {/* Student Information */}
                  <div className="col-span-1 sm:col-span-2">
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Student Information
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                        <p className="text-gray-600">
                          <strong className="text-gray-800">Name:</strong>{" "}
                          {selectedCampaign.name}
                        </p>
                        <p className="text-gray-600">
                          <strong className="text-gray-800">Email:</strong>{" "}
                          {selectedCampaign.email}
                        </p>
                        <p className="text-gray-600">
                          <strong className="text-gray-800">
                            Matriculation Number:
                          </strong>{" "}
                          {selectedCampaign.matric_number}
                        </p>
                        <p className="text-gray-600">
                          <strong className="text-gray-800">University:</strong>{" "}
                          {selectedCampaign.university_name}
                        </p>
                        <p className="text-gray-600">
                          <strong className="text-gray-800">
                            Course of Study:
                          </strong>{" "}
                          {selectedCampaign.course_of_study}
                        </p>
                        <p className="text-gray-600">
                          <strong className="text-gray-800">
                            Year of Entry:
                          </strong>{" "}
                          {selectedCampaign.year_of_entry}
                        </p>
                        <p className="text-gray-600">
                          <strong className="text-gray-800">
                            Funding Reason:
                          </strong>{" "}
                          {selectedCampaign.funding_reason}
                        </p>
                        <p className="text-gray-600">
                          <strong className="text-gray-800">Goal:</strong> $
                          {selectedCampaign.goal}
                        </p>
                        <p className="text-gray-600">
                          <strong className="text-gray-800">Status:</strong>{" "}
                          <span
                            className={`${
                              selectedCampaign.status === "approved"
                                ? "text-green-600"
                                : selectedCampaign.status === "pending"
                                ? "text-yellow-600"
                                : "text-red-600"
                            } font-medium`}
                          >
                            {selectedCampaign.status}
                          </span>
                        </p>
                        <p className="text-gray-600">
                          <strong className="text-gray-800">Start Date:</strong>{" "}
                          {new Date(
                            selectedCampaign.start_at
                          ).toLocaleDateString()}
                        </p>
                        <p className="text-gray-600">
                          <strong className="text-gray-800">End Date:</strong>{" "}
                          {new Date(
                            selectedCampaign.end_at
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Student Image */}
                    <div className="mt-8">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        Student Image
                      </h3>
                      <div className="mt-4 flex justify-center">
                        <img
                          src={`https://ipfs.io/ipfs/${selectedCampaign.student_image_url}`}
                          alt="Student Image"
                          className="max-w-xs h-auto rounded-lg shadow-lg border border-gray-200"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Link */}
                  <div className="col-span-1 sm:col-span-2">
                    <h3 className="text-3xl py-3 underline font-medium text-gray-700">
                      Social Media Link
                    </h3>
                    <p className="mt-2 text-md text-gray-600">
                      <a
                        href={selectedCampaign.project_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 text-lg hover:text-blue-600"
                      >
                        {selectedCampaign.project_link}
                      </a>
                    </p>
                  </div>

                  {/* Admission Proof Image */}
                  {selectedCampaign.admission_proof_url && (
                    <div className="col-span-1 sm:col-span-2">
                      <h3 className="text-3xl py-3 underline font-medium text-gray-700">
                        Admission Proof
                      </h3>
                      <img
                        src={`https://ipfs.io/ipfs/${selectedCampaign.admission_proof_url}`}
                        alt="Admission Proof"
                        className="mt-2 max-w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}

                  {/* Student Result Image */}
                  {selectedCampaign.student_result_image_url && (
                    <div className="col-span-1 sm:col-span-2">
                      <h3 className="text-3xl py-3 underline font-medium text-gray-700">
                        Student Result
                      </h3>
                      <img
                        src={`https://ipfs.io/ipfs/${selectedCampaign.student_result_image_url}`}
                        alt="Student Result"
                        className="mt-2 max-w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex items-center justify-center space-x-4">
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    onClick={handleApprove}
                    disabled={loading}
                  >
                    {loading ? "Approving..." : "Approve"}
                  </button>
                  <button
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    onClick={handleDecline}
                    disabled={loading}
                  >
                    {loading ? "Declining..." : "Decline"}
                  </button>
                </div>

                {error && (
                  <div className="text-red-500 text-center mt-4">{error}</div>
                )}
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
