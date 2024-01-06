import { MdEdit, MdSave, MdSubject } from 'react-icons/md';
import { Flex, IconButton, Spacer, Tooltip } from '@chakra-ui/react';
import LogoIcon from '@/icons/LogoIcon';

function ActionButton({
	icon,
	label,
}: Readonly<{ icon: React.ReactElement; label: string }>) {
	return (
		<Tooltip
			label={label}
			bg="#525252"
			color="#FFFFFF"
			placement="top"
			m="5px"
			gutter={5}
			hasArrow
		>
			<IconButton
				size="sm"
				aria-label={label}
				color="#FFE184"
				icon={icon}
			/>
		</Tooltip>
	);
}

export default function Controls() {
	return (
		<Flex
			w="100%"
			gap="10px"
			bg="#222222"
			py="8px"
			px="12px"
			direction="row"
			alignItems="center"
		>
			<IconButton
				size="sm"
				aria-label="Home"
				color="#FFE184"
				icon={<LogoIcon fontSize="30px" />}
				onClick={() => (location.href = '/')}
			/>
			<Spacer />
			<ActionButton icon={<MdSave fontSize="20px" />} label="Save" />
			<ActionButton icon={<MdEdit fontSize="20px" />} label="Edit" />
			<ActionButton
				icon={<MdSubject fontSize="20px" />}
				label="View Raw"
			/>
		</Flex>
	);
}