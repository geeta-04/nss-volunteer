const Application = require("../models/Application");

exports.apply = async (req, res) => {
  try {
    const { studentId, opportunityId } = req.body;

    const application = await Application.create({ student: studentId, opportunity: opportunityId, });

    res.json(application);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("student")
      .populate("opportunity");

    res.json(applications);
  } catch (error) {
    res.status(500).json(error);
  }
};

// ADD THIS BELOW getApplications

exports.updateStatus = async (req, res) => {
  try {
    const { applicationId, status } = req.body;

    const application = await Application.findByIdAndUpdate(
      applicationId,
      { status },
      { new: true }
    );

    res.json(application);
  } catch (error) {
    res.status(500).json(error);
  }
};