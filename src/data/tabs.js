import DateAndAuthorisation from '../components/DateAndAuthorisation';
import CourseInformation from '../components/CourseInformation';
import AdditionalCourseInformation from '../components/AdditionalCourseInformation';

export default [{
		"component": DateAndAuthorisation,
		"path":"DateAndAuthorisation",
		"name": "Date and Authorisation",
		"enabled":true
	},
	{
		"component": CourseInformation,
		"path": "CourseInformation",
		"name": "Course Information",
		"enabled":true
	},
	{
		"component": AdditionalCourseInformation,
		"path":"AdditionalCourseInformation",
		"name": "Additional Course Information",
		"enabled":false
	},
	// {
	// 	"component": "LearningOutcomes",
	// 	"name": "Course Descriptor - Learning Outcomes",
	// 	"enabled":false
	// },
	// {
	// 	"component": "CourseNarratives",
	// 	"name": "Course Descriptor - Course Narratives",
	// 	"enabled":false
	// },
	// {
	// 	"component": "MarketingInformation",
	// 	"name": "Marketing Information",
	// 	"enabled":false
	// },
	// {
	// 	"component": "ModuleStructure",
	// 	"name": "Module Structure",
	// 	"enabled":false
	// },
	// {
	// 	"component": "Exemptions",
	// 	"name": "Exemptions",
	// 	"enabled":false
	// }
]
