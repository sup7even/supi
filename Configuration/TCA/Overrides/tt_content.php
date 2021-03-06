<?php
declare(strict_types=1);

use TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider;
use TYPO3\CMS\Core\Imaging\IconRegistry;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;

(function ($extKey, $table, $type) {

    // Icon Registry
    $iconRegistry = GeneralUtility::makeInstance(IconRegistry::class);
    $iconRegistry->registerIcon(
        'supi',
        SvgIconProvider::class,
        [
            'source' => 'EXT:' . $extKey . '/Resources/Public/Icons/Extension.svg'
        ]
    );

    $ll = 'LLL:EXT:supi/Resources/Private/Language/locallang_db.xlf:';

    // Add CE
    ExtensionManagementUtility::addTcaSelectItem(
        $table,
        'CType',
        [
            $ll . $table .'.button.title',
            $type,
            'supi'
        ]
    );

    $showitem = [
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.headers;headers',
        'bodytext',
        '--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.frames;frames',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.appearanceLinks;appearanceLinks',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language',
        '--palette--;;language',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access',
        '--palette--;;hidden',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:categories',
        'categories',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:notes',
        'rowDescription',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:extended',
    ];

    $GLOBALS['TCA'][$table]['types'][$type] = [
        'showitem'         => implode(',', $showitem),
        'columnsOverrides' => [
            'bodytext' => [
                'config' => [
                    'enableRichtext'        => true,
                    'richtextConfiguration' => 'default',
                ],
            ],
            'header' => [
                'config' => [
                    'eval' => 'required',
                ],
            ],
        ],
    ];

    /**
     * Assign Icon
     */
    $GLOBALS['TCA'][$table]['ctrl']['typeicon_classes'][$type] = 'supi';

    // Youtube CE
    ExtensionManagementUtility::addTcaSelectItem(
        $table,
        'CType',
        [
            $ll . $table .'.youtube.title',
            'tx_supi_youtube',
            'supi'
        ]
    );

    $showitem = [
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.headers;headers',
        'assets;Youtube',
        '--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.frames;frames',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.appearanceLinks;appearanceLinks',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language',
        '--palette--;;language',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access',
        '--palette--;;hidden',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:categories',
        'categories',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:notes',
        'rowDescription',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:extended',
    ];

    $GLOBALS['TCA'][$table]['types']['tx_supi_youtube'] = [
        'showitem'         => implode(',', $showitem),
        'columnsOverrides' => [
            'assets' => [
                'config' => ExtensionManagementUtility::getFileFieldTCAConfig('assets', [
                        'minitems' => 1,
                        'maxitems' => 1,
                    ], 'youtube'),
            ],
        ],
    ];
    $GLOBALS['TCA'][$table]['ctrl']['typeicon_classes']['tx_supi_youtube'] = 'supi';

    // Maps CE
    ExtensionManagementUtility::addTcaSelectItem(
        $table,
        'CType',
        [
            $ll . $table .'.maps.title',
            'tx_supi_maps',
            'supi'
        ]
    );

    $showitem = [
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.headers;headers',
        'bodytext;'. $ll . $table .'.field.bodytext.tx_supi_maps.title',
        'image;'. $ll . $table .'.field.image.tx_supi_maps.title',
        '--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.frames;frames',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.appearanceLinks;appearanceLinks',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language',
        '--palette--;;language',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access',
        '--palette--;;hidden',
        '--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:categories',
        'categories',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:notes',
        'rowDescription',
        '--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:extended',
    ];

    $GLOBALS['TCA'][$table]['types']['tx_supi_maps'] = [
        'showitem'         => implode(',', $showitem),
        'columnsOverrides' => [
            'bodytext' => [
                'description' => $ll . $table .'.field.bodytext.tx_supi_maps.description',
                'config'      => [
                    'rows'        => 5,
                    'placeholder' => "Max Muster\nMusterstraße 1\n1234 Musterstadt\nÖsterreich",
                    'eval'        => 'required,trim',
                ],
            ],
            'image' => [
                'description' => $ll . $table .'.field.image.tx_supi_maps.description',
                'config'      => ExtensionManagementUtility::getFileFieldTCAConfig('image', [
                    'minitems' => 1,
                    'maxitems' => 1,
                ], 'jpeg,jpg,png'),
            ],
        ],
    ];
    $GLOBALS['TCA'][$table]['ctrl']['typeicon_classes']['tx_supi_maps'] = 'supi';
})('supi', 'tt_content', 'tx_supi_button');
